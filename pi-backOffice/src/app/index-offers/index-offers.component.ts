import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../service/offer.service';
import { Authentication } from '../services/authentication.service';
import { Candidature } from '../model/candidature';
import { User } from '../model/user';
@Component({
  selector: 'app-index-offers',
  templateUrl: './index-offers.component.html',
  styleUrls: ['./index-offers.component.css']
})
export class IndexOffersComponent {
  listOffer!:any;
  utilisateurConnecteID!: string;
  user!:any;
  constructor(private offerS:OfferService,private router:Router,private authService:Authentication){}
  ngOnInit(): void {
    this.loadUser();
    this.loadOffers();
    this.user=this.authService.user;
  }
  loadUser(): void {
    if (this.user && this.user.id) {
      this.authService.getUserById(this.user.id).subscribe(
        (response: any) => {
          this.utilisateurConnecteID = response.id;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  hasAlreadyApplied(offer: any): boolean {
    // Vérifier si l'utilisateur a déjà postulé à l'offre
    return offer.candidatures.some((candidature: Candidature) => candidature.individu.id === this.utilisateurConnecteID);
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