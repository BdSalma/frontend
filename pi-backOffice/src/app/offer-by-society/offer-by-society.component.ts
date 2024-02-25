import { Component } from '@angular/core';
import {OfferService} from "../service/offer.service"
import { Offer } from '../model/offer';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-offer-by-society',
  templateUrl: './offer-by-society.component.html',
  styleUrls: ['./offer-by-society.component.css']
})
export class OfferBySocietyComponent {
  id!:string;
  offer!:any;
  listOffer!:any;
  constructor(private offerS:OfferService,private route: ActivatedRoute,private router:Router){  this.id=this.route.snapshot.params['id'];
}
  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers() {
    this.offerS.offerBySociety().subscribe(
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
