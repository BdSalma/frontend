import { Component } from '@angular/core';
import {OfferService} from "../service/offer.service"
import { Offer } from '../model/offer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  listOffer!:any;
  constructor(private offerS:OfferService,private router:Router){}
  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers() {
    this.offerS.getOffers().subscribe(
      (data) => {
        this.listOffer = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteOffer(offerId: number) {
    this.offerS.DeleteOffer(offerId).subscribe(
      () => {
        console.log('Offer deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadOffers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
