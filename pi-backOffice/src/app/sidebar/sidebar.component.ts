import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Authentication } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private router: Router,
    private consumer: Authentication,
    private toastr: ToastrService
  ) {}

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
        this.consumer.isLoggedIn=false;
        this.router.navigate(['/signIn']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }

}
