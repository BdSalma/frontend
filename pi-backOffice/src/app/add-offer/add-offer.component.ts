import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {OfferService} from "../service/offer.service"
import {Offer} from "../model/offer"
import { Category } from '../model/category';
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {
  registerForm!: FormGroup;
  categoryOptions: string[] = Object.keys(Category).filter((key:any) => !isNaN(Number(Category[key])));


  constructor(private offerS:OfferService,private router:Router){}
  ngOnInit(){
    this.registerForm= new FormGroup({
      offerName:new FormControl('',Validators.required),
      offreCategory: new FormControl('', Validators.required),
      candidatnumber: new FormControl(''),
      candidatProfil: new FormControl('',Validators.required),
      duree:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),

    });

  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }
ajouter(){
  this.offerS.affectOfferToSociety(this.registerForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/offerBySociety'),
    error:(error)=>console.log(error)}
  )

}
}
