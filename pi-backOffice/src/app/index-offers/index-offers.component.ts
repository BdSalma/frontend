import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../service/offer.service';
@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css']
})
export class IndexOffersComponent {
  listOffer!:any;
  constructor(private offerS:OfferService,private router:Router){}
  ngOnInit(): void {
    this.loadOffers();
  }
  truncateDescription(text: string, maxLength: number, showFullDescription: boolean): string {
    if (showFullDescription) {
      return text; // Return full description if showFullDescription is true
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }
  showFullDescription(offer: any): void {
    // Toggle the showFullDescriptionFlag for the clicked offer
    offer.showFullDescriptionFlag = !offer.showFullDescriptionFlag;
  }
  loadOffers() {
    this.offerS.getAcceptedOffer().subscribe(
      (data) => {
        this.listOffer = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}