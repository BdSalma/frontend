import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';

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

  register(registerRequest: any) {
    return this.http.post(
      'http://localhost:8087/auth/create-user',
      registerRequest,
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
    return this.http.get('http://localhost:8087/auth/check-user', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.verificationToken}`,
      }),
    });
  }

  emailVerification() {
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
      } else {
        localStorage.clear();
        this.router.navigate(['/signIn']);
      }
    } else {
      this.router.navigate(['/signIn']);
    }
  }

  autoLogout(expirationDate: number) {
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
    this.clearTimeout = setTimeout(() => {
      this.logout().subscribe({
        next: () => {
          this.toastr.warning('Your session has expired');
          localStorage.clear();
          this.router.navigate(['/signIn']);
        },
        error: (error) => {
          this.toastr.error(error.error.message);
        },
      });
    }, expirationDate);
  }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8087/auth/user-details', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
