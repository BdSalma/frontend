import { Injectable } from '@angular/core';
import { Devis } from '../model/devis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http:HttpClient,private auth:Authentication) { }

  getDevis(){
    return this.http.get('http://localhost:8087/devis/retrieveAllDevis',{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  DeleteDevis(id:number){
    return this.http.delete(`http://localhost:8087/devis/deleteDevis/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  AddDevis(r:Devis){
    return this.http.post(`http://localhost:8087/devis/addDevis`,r,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
 
  getById(id:number){
    return this.http.get(`http://localhost:8087/devis/getDevis/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  putDevis(id:number,o:Devis){
    return this.http.put(`http://localhost:8087/devis/updateDevis/${id}`,o,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }

  createDevisAndAssignToRequest(requestId: number, devis: Devis) {
    return this.http.post(`http://localhost:8087/devis/createDevisAndAssignToRequest/${requestId}`, devis,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  getDevisByRequest(requestId: number){
    return this.http.get(`http://localhost:8087/devis/getDevisByRequestSupply/${requestId}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  getDevisBySociety(societyId : String){
    return this.http.get(`http://localhost:8087/devis/getDevisBySociety`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    })
  }
  updateDevisStatus(id: number, newStatus: boolean) {
    return this.http.put(`http://localhost:8087/devis/updateDevisStatus/${id}/${newStatus}`, null, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  
 
}
