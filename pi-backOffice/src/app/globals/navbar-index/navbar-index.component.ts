import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { Authentication } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.css'],
})
export class NavbarIndexComponent {
  constructor(
    private router: Router,
    private consumer: Authentication,
    private toastr: ToastrService
  ) {}
  login: boolean = false;
  user!: any;
  ngOnInit() {
    this.login = this.consumer.isLoggedIn;
    this.user = this.consumer.user;
  }

  logout() {
    this.consumer.logout().subscribe({
      next: (response) => {
        const logoutResponse = response as {
          message: string;
        };
        if (this.consumer.clearTimeout) {
          clearTimeout(this.consumer.clearTimeout);
        }
        this.toastr.success(logoutResponse.message);
        localStorage.clear();
        this.consumer.isLoggedIn = false;
        this.login = false;
        this.user = null;
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }
}
