import { Component } from '@angular/core';
import { DevisService } from '../service/devis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  listDeviss!:any;
  requestId!: any; 

  constructor(private devis:DevisService,private router:Router,   private route: ActivatedRoute    ){}
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params['requestId']) {
      this.requestId = +params['requestId'];
      this.loadDeviss();
    } else {
      console.error('Missing requestId in route parameters');
      // Handle missing requestId (e.g., redirect, display error message)
    }
  }

  loadDeviss() {
    if (this.requestId) { // Check if requestId is available before making the call
      this.devis.getDevisByRequest(this.requestId).subscribe(
        (data) => {
          this.listDeviss = data;
        },
        (error) => {
          console.error('Error fetching devis:', error);
          // Handle errors during devis fetching (e.g., display error message)
        }
      );
    }
  }
  deleteDevis(Id: number) {
    this.devis.DeleteDevis(Id).subscribe(
      () => {
        console.log('devis deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadDeviss();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateDevisStatus(id: number, newStatus: string) {
    // Display a simple alert before updating the status
    const userConfirmation = confirm('Etes-vous sûr de vouloir mettre à jour le statut de ce Devis?');
    console.log(this.devis);
    if (userConfirmation) {
      this.devis.updateDevisStatus(id, "Accepted").subscribe(
        () => {
          console.log(' status de devis modifiée .');
          // Actualiser la liste des offres après la mise à jour du statut
          this.loadDeviss();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
    // // Method to open a new window/tab to view the file associated with a devis
    // viewFile(fileName: string) {
    //   const fileUrl = this.devis.getFileUrl(fileName); // Assuming you have a method in DevisService to construct the file URL
    //   window.open(fileUrl, '_blank');
    // }
    viewFile(fileName: string) {
      const fileUrl = this.devis.getFileUrl(fileName);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    }
}
