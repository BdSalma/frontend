import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { OfferService } from 'src/app/service/offer.service';
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
  constructor(private offerS:OfferService,private router:Router,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.loadOffers();
    this.offerS.sendOffers();

  }
  loadOffers() {
    this.offerS.getAcceptedOffer().subscribe(
        (data) => {
            this.listOffer = data;
            // Loop through the offers to update the image URLs
            this.listOffer.forEach((offer: any) => {
                // Decode the file name from base64
                const decodedBase64 = atob(offer.file);

                // Remove the path from the file name using a regular expression
                const fileNameWithoutPath = decodedBase64.replace(/^.*[\\/]/, '');

                // Construct the relative path to the image file in your Angular application
                offer.file = `../assets/img/${fileNameWithoutPath}`;
            });
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
  addFavoris(id:number){
    this.offerS.addFavoris(id).subscribe((data) => {
      this.loadOffers();
    },
    (error) => {
      console.log(error);
    }
  );
}
  showFullDescription(offer: any): void {
    // Toggle the showFullDescriptionFlag for the clicked offer
    offer.showFullDescriptionFlag = !offer.showFullDescriptionFlag;
  }
  filterOffers(criteria:string): void {
    this.offerS.filterOffers(criteria).subscribe(
      (data) => {
        this.listOffer = data;
            // Loop through the offers to update the image URLs
            this.listOffer.forEach((offer: any) => {
                // Decode the file name from base64
                const decodedBase64 = atob(offer.file);

                // Remove the path from the file name using a regular expression
                const fileNameWithoutPath = decodedBase64.replace(/^.*[\\/]/, '');

                // Construct the relative path to the image file in your Angular application
                offer.file = `../assets/img/${fileNameWithoutPath}`;
            });
        },
        (error) => {
            console.log(error);
        }
    );
  }
}
