import { Component } from '@angular/core';
import {OfferService} from "../service/offer.service"
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  listOffer!:any;
  constructor(private offerS:OfferService){}
  ngOnInit(){
   this.offerS.getOffers().subscribe({next:(data)=>this.listOffer=data}
   );
  }
}
