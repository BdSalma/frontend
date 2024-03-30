import { Component } from '@angular/core';
import { DevisService } from '../service/devis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devis-by-society',
  templateUrl: './devis-by-society.component.html',
  styleUrls: ['./devis-by-society.component.css']
})
export class DevisBySocietyComponent {
  listDeviss!:any;
idsociety!:string;

  constructor(private devis:DevisService,private router:Router){}
  ngOnInit(): void {
   
      this.loadDeviss();
    
  }

  loadDeviss() {
    
      this.devis.getDevisBySociety(this.idsociety).subscribe(
        (data) => {
          this.listDeviss = data;
          console.log(data);
        },
        (error) => {
          console.error('Error fetching devis:', error);
          // Handle errors during devis fetching (e.g., display error message)
        }
      );
    
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
  // retrieveDevisDetails(id: number): void {
  //   this.devis.getById(id).subscribe(
  //     (devis: any) => {
  //       // Check if requestSupply is nested within another property (adjust property name accordingly)
  //       const requestSupply = devis.somethingContainingRequestSupply?.requestSupply;

  //       if (requestSupply) {
  //         console.log('RequestSupply:', requestSupply);
  //         const requestId = requestSupply.idRequestSupply;

  //         if (requestId) {
  //           this.router.navigate(['/addInvoice', requestId]);
  //         } else {
  //           console.error('Invalid RequestSupply id.');
  //         }
  //       } else {
  //         console.error('Devis is missing RequestSupply.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching Devis details:', error);
  //       // Handle the error as needed
  //     }
  //   );
  // }

  navigateToAddInvoice(requestId: number | undefined): void {
    if (requestId) {
      this.router.navigate(['/addInvoice', requestId]);
    } else {
      console.error('Invalid or missing RequestSupply id.');
    }
  }
  viewFile(fileName: string) {
    const fileUrl = this.devis.getFileUrl(fileName);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
}