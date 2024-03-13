import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { Individu } from '../model/individus';
import { IndividuRole } from '../model/individusRole';
import { Society } from '../model/society';
import { SocietyRole } from '../model/societyRole';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  token: string | null = null;
  isLoggedIn = false;
  refresh_token: string | null = null;
  expires_in: string | null = null;
  user: any | null = null;
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
    const output4 = window.localStorage.getItem('user');
    this.user = output4 ? JSON.parse(output4) : null;
  }

  updateToken(value: string): void {
    this.verificationToken = value;
  }

  updateLocals(
    user: any,
    token: string,
    refresh_token: string,
    expires_in: string
  ) {
    this.user = user;
    this.token = token;
    this.refresh_token = refresh_token;
    this.expires_in = expires_in;
  }

  updateLocalUser(user: any) {
    this.user = user;
  }

  get displayToken(): string {
    return this.verificationToken;
  }

  get getUserFromLocal(): User | null {
    return this.user;
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
        console.log(new Date(this.expires_in))
        const remainingTime = tokenExpirationDate - currentDate;
        this.isLoggedIn = true;
        this.autoLogout(remainingTime);
      } else {
        localStorage.clear();
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
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
          this.isLoggedIn = false;
          this.router.navigate(['/']);
        },
        error: (error : HttpErrorResponse) => {
          this.toastr.error(error.error.message);
        },
      });
    }, expirationDate);
  }

  getUser(accessToken: string) {
    return this.http.get('http://localhost:8087/auth/user-details', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      }),
    });
  }

  updateUser(id: string, updateRequest: any) {
    return this.http.put(
      `http://localhost:8087/auth/update-user/${id}`,
      updateRequest,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  approveUser(id: string) {
    return this.http.put(
      `http://localhost:8087/auth/approve-user/${id}`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  activateUser(id: string) {
    return this.http.put(
      `http://localhost:8087/auth/activate-user/${id}`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  getUserById(id: string) {
    return this.http.get(`http://localhost:8087/auth/user-id/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  getAllIndividu() {
    return this.http.get<Individu[]>(
      'http://localhost:8087/auth/get-All-individu',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  getAllIndividuFilteredByRole(role: IndividuRole) {
    return this.http.get<Individu[]>(
      `http://localhost:8087/auth/individus-byRole/${role}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  getAllIndividuFilteredByField(search: String) {
    return this.http.get<Individu[]>(
      `http://localhost:8087/auth/individus-byFiled/${search}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }


  getAllSocieties() {
    return this.http.get<Society[]>(
      'http://localhost:8087/auth/get-All-society',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  getAllSocietiesFilteredByRole(role: SocietyRole) {
    return this.http.get<Society[]>(
      `http://localhost:8087/auth/societies-byRole/${role}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  getAllSocietiesFilteredByField(search: String) {
    return this.http.get<Society[]>(
      `http://localhost:8087/auth/societies-byFiled/${search}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  getAllUsers() {
    return this.http.get<any[]>(
      'http://localhost:8087/auth/all-users',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
}
