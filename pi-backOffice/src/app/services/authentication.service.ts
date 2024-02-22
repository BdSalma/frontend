import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  token: string | null = null;
  verificationToken: string;

  constructor(private http: HttpClient) {
    this.verificationToken = '';
    const output = window.localStorage.getItem('token');
    this.token = output ? JSON.parse(output) : null;
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
}
