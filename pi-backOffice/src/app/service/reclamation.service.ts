import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reclamation } from '../model/reclamation';
import { Authentication } from './authentication.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})

export class ReclamationService {
  

  constructor(private http : HttpClient, private auth : Authentication ) { }

  getReclamation(){
    return  this.http.get<Reclamation[]>('http://localhost:8087/reclamation/retrieve')
   }
   getFavorite(){
    return  this.http.get<Reclamation[]>('http://localhost:8087/reclamation/favorites', {
      headers: new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`,
      'Content-Type': 'application/json',
    }),} )
   }
   deleteReclamation(id: number) {
    return this.http.delete('http://localhost:8087/reclamation/delete/' + id);
  }
  Review(id: String){
    return  this.http.post('http://localhost:8087/reclamation/review/'+id+'/',
    httpOptions)
   }
   
   getFeed(){
    return  this.http.get<Reclamation[]>('http://localhost:8087/reclamation/feed')
   }

   createReclamation( reclamation : any){
    return  this.http.post<any>('http://localhost:8087/reclamation/create',reclamation,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
        'Content-Type': 'application/json',
      }),
    })
   
   }
   addToFavorites(reclamationId: number) {
    return this.http.post(`http://localhost:8087/reclamation/add-to-favorites/${reclamationId}`, {}, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
        'Content-Type': 'application/json',
      }),
    });
  }
  rateReclamation(id: number, rating: number) {
    const url = `http://localhost:8087/reclamation/${id}/rate`;
    return this.http.put<Reclamation>(url, {rating} , {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
        'Content-Type': 'application/json',
      }),
    });
  }
  getRating(reclamationId: number) {
    const url = `http://localhost:8087/reclamation/${reclamationId}/rating`;
    return this.http.get<number>(url);
  }

}
