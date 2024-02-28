import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Offer} from "../model/offer";
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http:HttpClient) { }
  getOffers(){
    return this.http.get('http://localhost:8087/Offer/allOffers');
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
        return this.http.post(`http://localhost:8087/Offer/add-offer/1`,o)
  }
  offerBySociety(){
    return this.http.get(`http://localhost:8087/Offer/allOffers/1`)
}
offerByCategory(category:Category){
  return this.http.get(`http://localhost:8087/Offer/getofferByCategory/${category}`)
}
filterOffers(category: string, society: string, offerName: string): Observable<Offer[]> {
  // Construction des paramètres de requête
  let params = new HttpParams();
  if (category) {
    params = params.set('category', category);
  }
  if (society) {
    params = params.set('society', society);
  }
  if (offerName) {
    params = params.set('offerName', offerName);
  }

  // Appel de l'API de filtrage avec les paramètres de requête
  return this.http.get<Offer[]>('http://localhost:8087/Offer/filter', { params: params });
}
}
