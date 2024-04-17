import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { Authentication } from 'src/app/service/authentication.service';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(
    private reclamationService: ReclamationService,
    private auth : Authentication
  ) {}

  users : any[]=[];
  nom !: String;

  Contact(email : String){
    this.reclamationService
    .Contact(email)
    .subscribe();
  }
}
