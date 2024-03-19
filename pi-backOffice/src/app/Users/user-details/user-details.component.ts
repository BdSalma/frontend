import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authentication } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  constructor(
    private consumer: Authentication,
    private route: ActivatedRoute
  ) {}
  userId!: string;
  user!: any;
  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.consumer
      .getUserById(this.userId)
      .subscribe((response) => (this.user = response));
  }
}
