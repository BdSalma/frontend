import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSupply } from '../model/requestSupply';
import { Authentication } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RequestSupplyService {

  constructor(private http:HttpClient,private auth:Authentication) { }
  getRequests(){
    return this.http.get('http://localhost:8087/requestSupply/retrieveAllRequests');
  }
  getRequestsByIndividus(){
    return this.http.get(`http://localhost:8087/requestSupply/retrieveAllRequestSuppliesByIndividus`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
}
  DeleteRequest(id:number){
    return this.http.delete(`http://localhost:8087/requestSupply/deleteRequestSupply/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  AddRequest(r:RequestSupply){
    return this.http.post(`http://localhost:8087/requestSupply/addRequestSupply`, r,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/requestSupply/getRequestSupply/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  putRequest(id:number,o:RequestSupply){
    return this.http.put(`http://localhost:8087/requestSupply/updateRequestSupply/${id}`,o,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
 
}
