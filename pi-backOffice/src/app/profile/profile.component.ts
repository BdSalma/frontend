import { Component } from '@angular/core';
import { Authentication } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private consumer: Authentication) {}
  userData: any;
  ngOnInit() {
    this.userData = this.consumer.getUserFromLocal;
  }
}
