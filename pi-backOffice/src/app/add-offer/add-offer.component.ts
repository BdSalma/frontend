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
  registerForm!: any;
  categoryOptions: string[] = Object.keys(Category).filter((key:any) => !isNaN(Number(Category[key])));

  fileBase64: string | ArrayBuffer | null = null;

  constructor(private offerS:OfferService,private router:Router){}
  ngOnInit(){
    this.registerForm= new FormGroup({
      offerName:new FormControl('',Validators.required),
      offreCategory: new FormControl('', Validators.required),
      candidatnumber: new FormControl(''),
      candidatProfil: new FormControl('',Validators.required),
      duree:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      file:new FormControl('')

    });

  }

  
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }
  showFileUpload: boolean = false;

  // Méthode pour changer la valeur de showFileUpload
  toggleFileUpload(): void {
    this.showFileUpload = !this.showFileUpload; // Inverse la valeur actuelle
  }
  ajouter() {
    // Vérifiez si registerForm est null
    if (this.registerForm) {
      const fileBase64: string | null = this.registerForm.get('file').value;
        this.registerForm.patchValue({
          fileBase64: fileBase64
        });
        this.offerS.affectOfferToSociety(this.registerForm.value).subscribe({
          next: () => this.router.navigateByUrl('/offerBySociety'),
          error: (error) => console.log(error)
        });
      }
     else {
      console.error("Register form is null.");
    }
  }
  
}
