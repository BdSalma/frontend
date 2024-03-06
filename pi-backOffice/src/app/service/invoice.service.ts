import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http:HttpClient) { }

  getInvoices(){
    return this.http.get('http://localhost:8087/invoice/retrieveAllInvoices');
  }
  DeleteInvoice(id:number){
    return this.http.delete(`http://localhost:8087/invoice/deleteInvoice/${id}`);
  }
  AddInvoice(r:Invoice){
    return this.http.post(`http://localhost:8087/invoice/addInvoice`,r)
  }
  getById(id:number){
    return this.http.get(`http://localhost:8087/invoice/getInvoice/${id}`);
  }
  putInvoice(id:number,o:Invoice){
    return this.http.put(`http://localhost:8087/invoice/updateInvoice/${id}`,o);
  }

  addAndAssignInvoiceToRequest(invoice: Invoice, requestSupplyId: number) {
    return this.http.post(`http://localhost:8087/invoice/assignToRequest/${requestSupplyId}`, invoice);
  }
  getInvoicesBySociety(societyId: String) {
    return this.http.get(`http://localhost:8087/invoice/getInvoicesBySociety/bbb}`);
  }
}
