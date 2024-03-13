import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../service/offer.service';
import { Category } from '../model/category';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-page-offers',
  templateUrl: './page-offers.component.html',
  styleUrls: ['./page-offers.component.css']
})
export class PageOffersComponent {
  listOffer!:any;
  searchCategory: Category | undefined;
  categories: string[] = Object.keys(Category).filter((key:any) => !isNaN(Number(Category[key])));
  placeholderText = "Choisissez une catégorie";
  category = new FormControl('', Validators.required)
  constructor(private offerS:OfferService,private router:Router){}
  ngOnInit(): void {
    this.loadOffers();
    this.offerS.sendOffers();

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
  filterOffers(criteria:string): void {
    this.offerS.filterOffers(criteria).subscribe(
      (data) => {
        this.listOffer = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
