import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestSupply } from '../model/requestSupply';

@Injectable({
  providedIn: 'root'
})
export class RequestSupplyService {

  constructor(private http:HttpClient) { }
  getRequests(){
    return this.http.get('http://localhost:8087/requestSupply/retrieveAllRequestSupplies');
  }
  DeleteRequest(id:number){
    return this.http.delete(`http://localhost:8087/requestSupply/deleteRequestSupply/${id}`);
  }
  AddRequest(r:RequestSupply){
    return this.http.post(`http://localhost:8087/requestSupply/addRequestSupply`,r)
  }
 
}
