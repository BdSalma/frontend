import { Component } from '@angular/core';
import {OfferService} from "../../service/offer.service"
import { Offer } from '../../model/offer';
import { Router,ActivatedRoute } from '@angular/router';
import { Category } from '../../model/category';
@Component({
  selector: 'app-offer-by-society',
  templateUrl: './offer-by-society.component.html',
  styleUrls: ['./offer-by-society.component.css']
})
export class OfferBySocietyComponent {
  id!:string;
  offer!:any;
  listOffer!:any;
  searchCategory: Category | undefined;
  categories: string[] = Object.keys(Category).filter((key:any) => !isNaN(Number(Category[key])));
  placeholderText = "Choisissez une catégorie";
  constructor(private offerS:OfferService,private route: ActivatedRoute,private router:Router){  this.id=this.route.snapshot.params['id'];
}
  ngOnInit(): void {
    this.loadOffers();
  }
  searchApartments(): void {
    if (!this.searchCategory) {
      alert("Veuillez sélectionner une catégorie");
      return;
    }
    this.offerS.offerByCategory(this.searchCategory).subscribe(
      (data) => {
        this.listOffer = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadOffers() {
    this.offerS.offerBySociety().subscribe(
      (data) => {
        this.listOffer = data;
        console.log("looooooooooooooog");
        
        console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeee",data)
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
