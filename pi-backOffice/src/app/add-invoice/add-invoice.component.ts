import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../service/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  invoiceForm!: FormGroup;
  requestId!: number; 
  selectedFile: File | undefined;


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
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
  onSubmit(){
    console.log(this.invoiceForm.value);
    //alert('SUCCES\n\n'+ JSON.stringify(this.invoiceForm.value,null,4))
  }
  reset(){
    this.invoiceForm.reset();
  }
ajouter(){
  if (this.invoiceForm.valid) {

  const invoiceData = {
    description: this.invoiceForm.get('description')?.value,
  };

  const formData = new FormData();
  formData.append('invoice', JSON.stringify(invoiceData));
  formData.append('file', this.selectedFile!, this.selectedFile!.name);

  this.Invoices.addAndAssignInvoiceToRequest(this.invoiceForm.value,this.requestId,formData).subscribe(
    {next:()=>this.router.navigateByUrl('/invoices'),
    error:(error)=>console.log(error)}
  )
  }
}
}
