import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reclamation } from '../model/reclamation';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})

export class ReclamationService {
  

  constructor(private http : HttpClient) { }

  getReclamation(){
    return  this.http.get<Reclamation[]>('http://localhost:8087/reclamation/retrieve')
   }
   deleteReclamation(id: number) {
    return this.http.delete('http://localhost:8087/reclamation/delete/' + id);
  }
  Review(id: String, Rid:number){
    return  this.http.post('http://localhost:8087/reclamation/review/'+id+'/'+Rid,
    httpOptions)
   }

}
