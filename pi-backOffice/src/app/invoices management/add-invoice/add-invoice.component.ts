import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../service/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  invoiceForm!: FormGroup;
  requestId!: number; 


  constructor(private Invoices:InvoiceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit() {
    this.invoiceForm = new FormGroup({
      file: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  
    const params = this.route.snapshot.params;
    if (params['requestId']) {
      this.requestId = +params['requestId'];
    } else {
      console.error('Missing requestId in route parameters');
      // Handle missing requestId (e.g., redirect, display error message)
    }
  }
  onSubmit(){
    console.log(this.invoiceForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.invoiceForm.value,null,4))
  }
  reset(){
    this.invoiceForm.reset();
  }
ajouter(){
  this.Invoices.addAndAssignInvoiceToRequest(this.invoiceForm.value,this.requestId).subscribe(
    {next:()=>this.router.navigateByUrl('/invoices'),
    error:(error)=>console.log(error)}
  )

}
}
