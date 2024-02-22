import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  token: string | null = null;
  refresh_token: string | null = null;
  expires_in: string | null = null;
  verificationToken: string;
  clearTimeout: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.verificationToken = '';
    const output = window.localStorage.getItem('token');
    this.token = output ? JSON.parse(output) : null;
    const output2 = window.localStorage.getItem('refresh_token');
    this.refresh_token = output2 ? JSON.parse(output2) : null;
    const output3 = window.localStorage.getItem('expires_in');
    this.expires_in = output3 ? JSON.parse(output3) : null;
  }

  updateToken(value: string): void {
    this.verificationToken = value;
  }

  get displayToken(): string {
    return this.verificationToken;
  }

  login(loginRequest: any) {
    return this.http.post(
      'http://localhost:8087/auth/login',
      loginRequest,
      httpOptions
    );
  }

  logout() {
    return this.http.post(
      'http://localhost:8087/auth/logout',
      {
        token: this.refresh_token,
      },
      httpOptions
    );
  }

  checkValidity() {
    console.log(this.displayToken);
    return this.http.get('http://localhost:8087/auth/check-user', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.verificationToken}`,
      }),
    });
  }

  emailVerification() {
    console.log(this.verificationToken);
    return this.http.put(
      'http://localhost:8087/auth/emailVerification',
      {},
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.verificationToken}`,
        }),
      }
    );
  }

  autoLogin() {
    if (this.token && this.expires_in) {
      const currentDate = new Date().getTime();
      const tokenExpirationDate = new Date(this.expires_in).getTime();
      if (tokenExpirationDate > currentDate) {
        const remainingTime = tokenExpirationDate - currentDate;
        this.autoLogout(remainingTime);
        this.router.navigate(['/']);
        this.toastr.warning('Your session has expired');
      } else {
        localStorage.clear();
        this.router.navigate(['/signIn']);
      }
    } else {
      this.router.navigate(['/signIn']);
    }
  }

  autoLogout(expirationDate: number) {
    console.log(expirationDate);
    this.clearTimeout = setTimeout(() => {
      this.logout();
      this.toastr.warning('Your session has expired');
      this.router.navigate(['/signIn']);
      localStorage.clear();
      if (this.clearTimeout) {
        clearTimeout(this.clearTimeout);
      }
    }, expirationDate);
  }
}
