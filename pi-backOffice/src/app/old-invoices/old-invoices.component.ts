import { Component } from '@angular/core';
import { InvoiceService } from '../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-invoices',
  templateUrl: './old-invoices.component.html',
  styleUrls: ['./old-invoices.component.css']
})
export class OldInvoicesComponent {
  listInvoices!:any;
  constructor(private Invoices:InvoiceService,private router:Router){}
  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.Invoices.getOldInvoices().subscribe(
      (data) => {
        this.listInvoices = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  viewFile(fileName: string) {
    const fileUrl = this.Invoices.getFileUrl(fileName);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
}
