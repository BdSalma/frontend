import { Injectable } from '@angular/core';
import { Devis } from '../model/devis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http:HttpClient) { }

  getDevis(){
    return this.http.get('http://localhost:8087/devis/retrieveAllDevis');
  }
  DeleteDevis(id:number){
    return this.http.delete(`http://localhost:8087/devis/deleteDevis/${id}`);
  }
  AddDevis(r:Devis){
    return this.http.post(`http://localhost:8087/devis/addDevis`,r)
  }
 
  getById(id:number){
    return this.http.get(`http://localhost:8087/devis/getDevis/${id}`);
  }
  putDevis(id:number,o:Devis){
    return this.http.put(`http://localhost:8087/devis/updateDevis/${id}`,o);
  }

  createDevisAndAssignToRequest(requestId: number, devis: Devis) {
    return this.http.post(`http://localhost:8087/devis/createDevisAndAssignToRequest/${requestId}/bbb`, devis);
  }
  getDevisByRequest(requestId: number){
    return this.http.get(`http://localhost:8087/devis/getDevisByRequestSupply/${requestId}`);
  }
  getDevisBySociety(societyId : String){
    return this.http.get(`http://localhost:8087/devis/getDevisBySociety/bbb`);
  }
  updateDevisStatus(id: number, newStatus: boolean) {
    return this.http.put(`http://localhost:8087/devis/updateDevisStatus/${id}/${newStatus}`, {});
  }
 
}
