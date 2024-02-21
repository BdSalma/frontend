import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OfferService } from '../service/offer.service';
import { Category } from '../model/category';
@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent {
  id!:number;
  offer:any
  registerForm!: FormGroup;
  categoryOptions = Object.keys(Category); // Obtenez les noms des catégories de l'énumération Category
  constructor(private fb:FormBuilder,private offerS:OfferService,private router:Router,private route: ActivatedRoute){  
}
ngOnInit(){
  this.registerForm= new FormGroup({
    offerName:new FormControl('',Validators.required),
    offreCategory: new FormControl('', Validators.required),
    candidatnumber: new FormControl(''),
    candidatProfil: new FormControl('',Validators.required),
    duree:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),

  });
  this.id=this.route.snapshot.params['id'];
  this.offerS.getById(this.id).subscribe(
    (offerr) => { this.offer=offerr;
    this.registerForm.patchValue(this.offer);
  }
  );
}
reset(){
  this.registerForm.reset();
}
onSubmit(){
  console.log(this.registerForm.value);
}
update(){
  this.offerS.putProduct(this.id,this.registerForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/offre'),
    error:(error)=>console.log(error)}
  )

}
}
