import { Component } from '@angular/core';
import { RequestSupplyService } from '../service/request-supply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  listRequests!:any;

  constructor(private requests:RequestSupplyService,private router:Router){}
  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requests.getRequestsByIndividus().subscribe(
      (data) => {
        this.listRequests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteRequest(RequestId: number) {
    this.requests.DeleteRequest(RequestId).subscribe(
      () => {
        console.log('Offer deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  confirmDelete(requestId: number) {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette demande ?');
    if (confirmed) {
      this.deleteRequest(requestId);
    }
  }

  navigateTolistDevis(requestId: any) {
    this.router.navigate(['/devis', requestId]);
  }
  

}
