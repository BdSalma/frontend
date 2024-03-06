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
  getRequestsByIndividus(){
    return this.http.get(`http://localhost:8087/requestSupply/retrieveAllRequestSupplies/hadil`)
}
  DeleteRequest(id:number){
    return this.http.delete(`http://localhost:8087/requestSupply/deleteRequestSupply/${id}`);
  }
  AddRequest(r:RequestSupply){
    return this.http.post(`http://localhost:8087/requestSupply/addRequestSupply/hadil`,r)
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/requestSupply/getRequestSupply/${id}`);
  }
  putRequest(id:number,o:RequestSupply){
    return this.http.put(`http://localhost:8087/requestSupply/updateRequestSupply/${id}`,o);
  }
 
}
