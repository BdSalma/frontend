import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Offer} from "../model/offer"
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
}
