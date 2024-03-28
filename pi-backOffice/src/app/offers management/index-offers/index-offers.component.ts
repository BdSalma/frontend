import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/service/authentication.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css']
})
export class IndexOffersComponent {
  listOffer!:any;
  user!: any;
  constructor(private offerS:OfferService,private router:Router,private consumer: Authentication){}
  ngOnInit(): void {
    this.loadOffers();
    this.user=this.consumer.user  }
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
  addFavoris(id:number){
    this.offerS.addFavoris(id).subscribe((data) => {
      this.loadOffers();
    },
    (error) => {
      console.log(error);
    }
  );
}
  


}