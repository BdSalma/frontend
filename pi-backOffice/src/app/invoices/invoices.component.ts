import { Component } from '@angular/core';
import { InvoiceService } from '../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  listInvoices!:any;
  constructor(private Invoices:InvoiceService,private router:Router){}
  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.Invoices.getInvoices().subscribe(
      (data) => {
        this.listInvoices = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteInvoice(InvoiceId: number) {
    this.Invoices.DeleteInvoice(InvoiceId).subscribe(
      () => {
        console.log('Offer deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadInvoices();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
