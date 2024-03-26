import { Component } from '@angular/core';
import { Authentication } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pi-backOffice';

  constructor(private consumer: Authentication) {}

  ngOnInit() {
    this.consumer.autoLogin();
  }
}
