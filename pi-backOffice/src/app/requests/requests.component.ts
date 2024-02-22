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
    this.requests.getRequests().subscribe(
      (data) => {
        this.listRequests = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
