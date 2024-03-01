import { Component } from '@angular/core';
import { RequestSupplyService } from '../service/request-supply.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent {
  id!:number;
  request:any
  updateForm!: FormGroup;
  constructor(private fb:FormBuilder,private requesteS:RequestSupplyService,private router:Router,private route: ActivatedRoute){  
}
ngOnInit(){
  this.updateForm= new FormGroup({
    quantity:new FormControl('',Validators.required),
      category: new FormControl('', Validators.required),
      date: new FormControl(''),
      description: new FormControl('',Validators.required),
      validity:new FormControl('',Validators.required),

  });
  this.id=this.route.snapshot.params['id'];
  this.requesteS.getById(this.id).subscribe(
    (requester) => { this.request=requester;
    this.updateForm.patchValue(this.request);
  }
  );
}
 reset(){
   this.updateForm.reset();
 }
 onSubmit(){
   console.log(this.updateForm.value);
 }
 update(){
   this.requesteS.putRequest(this.id,this.updateForm.value).subscribe(
     {next:()=>this.router.navigate(['/supplyrequests']),
     error:(error)=>console.log(error)}
   )

}
}
