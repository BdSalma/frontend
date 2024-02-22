import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestSupplyService } from '../service/request-supply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent {
  requestForm!: FormGroup;


  constructor(private requests:RequestSupplyService,private router:Router){}
  ngOnInit(){
    this.requestForm= new FormGroup({
      quantity:new FormControl('',Validators.required),
      category: new FormControl('', Validators.required),
      date: new FormControl(''),
      description: new FormControl('',Validators.required),
      validity:new FormControl('',Validators.required),

    });

  }
  onSubmit(){
    console.log(this.requestForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.requestForm.value,null,4))
  }
  reset(){
    this.requestForm.reset();
  }
ajouter(){
  this.requests.AddRequest(this.requestForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/supplyrequests'),
    error:(error)=>console.log(error)}
  )

}
}
