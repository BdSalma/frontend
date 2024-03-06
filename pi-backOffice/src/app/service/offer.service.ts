import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import {Offer} from "../model/offer";
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Society } from '../model/society';
import { Authentication } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient,private auth:Authentication) {}
    getOffers(){
    return this.http.get('http://localhost:8087/Offer/allOffers');
  }
  getAcceptedOffer(){
    return this.http.get('http://localhost:8087/Offer/AcceptedOffer');
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/Offer/offer/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    })
  
  }
  DeleteOffer(id:number){
    return this.http.delete(`http://localhost:8087/Offer/deleteOffer/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    })
  }
  AddOffer(o:Offer){
    return this.http.post(`http://localhost:8087/Offer/add-offer`,o, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    })
  }
  putProduct(id:number,o:Offer){
    return this.http.put(`http://localhost:8087/Offer/updateOffer/${id}`,o, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    })
  }
  affectOfferToSociety(o:Offer){
        return this.http.post('http://localhost:8087/Offer/add-offer',o, {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.auth.token}`
          }),
        })
      }
  offerBySociety(){
    return this.http.get('http://localhost:8087/Offer/allOffersBySociety',{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    })
}
offerByCategory(category:Category){
  return this.http.get(`http://localhost:8087/Offer/getofferByCategory/${category}`,{
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  })
}
filterOffers(criteria: string) {
  return this.http.get(`http://localhost:8087/Offer/Offer/filterByCriteria/${criteria}`);
}
acceptOffer(idOffer: number): Observable<void> {
  return this.http.post<void>(`http://localhost:8087/Offer/Accept/${idOffer}`, {}, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  });
}

refuseOffer(idOffer: number): Observable<void> {
  return this.http.post<void>(`http://localhost:8087/Offer/Refuse/${idOffer}`, {}, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  });
}
getAverageOffersPerDay() {
  return this.http.get<number>('http://localhost:8087/Offer/averageOffersPerDay', {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  });
}
getNbAcceptedOffer(){
  return this.http.get<number>('http://localhost:8087/Offer/nbAcceptedOffer',{
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  });
}
getEnAttenteOffer(){
  return this.http.get('http://localhost:8087/Offer/ListAcceptedOffer',{
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    }),
  });

}
}
