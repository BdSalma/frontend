import { Component } from '@angular/core';
import { RequestSupplyService } from '../service/request-supply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-index',
  templateUrl: './requests-index.component.html',
  styleUrls: ['./requests-index.component.css']
})
export class RequestsIndexComponent {
  listRequests!:any;

  constructor(private requests:RequestSupplyService,private router:Router){}
  ngOnInit(): void {
    this.loadRequests();
  }
  truncateDescription(text: string, maxLength: number, showFullDescription: boolean): string {
    if (showFullDescription) {
      return text; 
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }
  showFullDescription(request: any): void {
    request.showFullDescriptionFlag = !request.showFullDescriptionFlag;
  }
  loadRequests() {
    this.requests.getRequests().subscribe(
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
        console.log('request deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadRequests();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  navigateToAddDevis(requestId: number) {
    this.router.navigate(['/createDevisAndAssignToRequest', requestId]);
  }
 
  
}
