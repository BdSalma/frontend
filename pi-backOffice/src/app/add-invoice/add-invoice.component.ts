import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  invoiceForm!: FormGroup;


  constructor(private Invoices:InvoiceService,private router:Router){}
  ngOnInit(){
    this.invoiceForm= new FormGroup({
      file:new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),
     

    });

  }
  onSubmit(){
    console.log(this.invoiceForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.invoiceForm.value,null,4))
  }
  reset(){
    this.invoiceForm.reset();
  }
ajouter(){
  this.Invoices.AddInvoice(this.invoiceForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/invoices'),
    error:(error)=>console.log(error)}
  )

}
}
