import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../model/invoice';
import { Authentication } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http:HttpClient,private auth:Authentication) { }

  getInvoices(){
    return this.http.get('http://localhost:8087/invoice/retrieveAllInvoices',{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  DeleteInvoice(id:number){
    return this.http.delete(`http://localhost:8087/invoice/deleteInvoice/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  AddInvoice(r:Invoice){
    return this.http.post(`http://localhost:8087/invoice/addInvoice`,r,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    })
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/invoice/getInvoice/${id}`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  putInvoice(id:number,o:Invoice){
    return this.http.put(`http://localhost:8087/invoice/updateInvoice/${id}`,o,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }

  addAndAssignInvoiceToRequest(invoice: Invoice, requestSupplyId: number) {
    return this.http.post(`http://localhost:8087/invoice/assignToRequest/${requestSupplyId}`, invoice,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
  getInvoicesBySociety(societyId: String) {
    return this.http.get(`http://localhost:8087/invoice/getInvoicesBySociety`,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`,
      })
    });
  }
}
