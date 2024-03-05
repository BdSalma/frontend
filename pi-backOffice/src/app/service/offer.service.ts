import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Offer} from "../model/offer";
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Society } from '../model/society';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http:HttpClient) { }
  getOffers(){
    return this.http.get('http://localhost:8087/Offer/allOffers');
  }
  getAcceptedOffer(){
    return this.http.get('http://localhost:8087/Offer/AcceptedOffer');
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/Offer/offer/${id}`);
  }
  DeleteOffer(id:number){
    return this.http.delete(`http://localhost:8087/Offer/deleteOffer/${id}`);
  }
  AddOffer(o:Offer){
    return this.http.post(`http://localhost:8087/Offer/add-offer`,o)
  }
  putProduct(id:number,o:Offer){
    return this.http.put(`http://localhost:8087/Offer/updateOffer/${id}`,o);
  }
  affectOfferToSociety(o:Offer){
        return this.http.post(`http://localhost:8087/Offer/add-offer/2`,o)
  }
  offerBySociety(){
    return this.http.get(`http://localhost:8087/Offer/allOffers/1`)
}
offerByCategory(category:Category){
  return this.http.get(`http://localhost:8087/Offer/getofferByCategory/${category}`)
}
filterOffers(criteria: string) {

  // Appel de l'API de filtrage avec les paramètres de requête
  return this.http.get(`http://localhost:8087/Offer/Offer/filterByCriteria/${criteria}`);
}
acceptOffer(idOffer: number): Observable<void> {
  return this.http.post<void>(`http://localhost:8087/Offer/Accept/${idOffer}`, {});
}

refuseOffer(idOffer: number): Observable<void> {
  return this.http.post<void>(`http://localhost:8087/Offer/Refuse/${idOffer}`, {});
}
getAverageOffersPerDay() {
  return this.http.get<number>('http://localhost:8087/Offer/averageOffersPerDay');
}
getNbAcceptedOffer(){
  return this.http.get<number>('http://localhost:8087/Offer/nbAcceptedOffer');
}
}
