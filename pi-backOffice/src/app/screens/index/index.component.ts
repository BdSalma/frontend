import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../../service/offer.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
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
}
