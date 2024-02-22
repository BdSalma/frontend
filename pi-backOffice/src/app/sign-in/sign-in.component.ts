import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private consumer: Authentication,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(form: any) {
    this.consumer.login(form).subscribe({
      next: (response) => {
        const loginResponse = response as {
          access_token: string;
          refresh_token: string;
          expires_in: string;
        };
        this.consumer.updateToken(loginResponse.access_token)
        this.checkValidity(loginResponse);
      },
      error: (error) => {
        // this.toastr.error(error.error.message);
        console.log(error);
      },
    });
  }

  checkValidity(loginResponse: any) {
    this.consumer.checkValidity().subscribe({
      next: () => {
        localStorage.setItem(
          'token',
          JSON.stringify(loginResponse.access_token)
        );
        localStorage.setItem(
          'refresh_token',
          JSON.stringify(loginResponse.refresh_token)
        );
        localStorage.setItem(
          'expires_in',
          JSON.stringify(loginResponse.expires_in)
        );
        this.toastr.success('You have logged in successfully');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        if (error.error.message == 'Not verified') {
          console.error(loginResponse.access_token);
          this.router.navigate(['/emailVerification']);
        } else if (error.error.message == 'Not approved') {
          console.error('ok2');
        } else {
          console.error(error.error.message);
        }
      },
    });
  }
}
