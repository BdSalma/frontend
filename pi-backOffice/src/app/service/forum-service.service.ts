import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from '../model/forum';
import { Observable } from 'rxjs';
import { Authentication } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ForumServiceService {
  apiURL: string = 'http://localhost:8087/forum';

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: Authentication
  ) {}

  listForum(): Observable<Forum[]> {
    const url = `${this.apiURL}/find-all-forums`;
    return this.http.get<Forum[]>(url ,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }

  getForumById(id: number): Observable<Forum> {
    const url = `${this.apiURL}/find-forum/${id}`;
    return this.http.get<Forum>(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }

  getCurrentForum(): Observable<Forum> {
    const url = `${this.apiURL}/`;
    return this.http.get<Forum>(this.apiURL,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }
  addForum(Forum: Forum): Observable<Forum> {
    const url = `${this.apiURL}/add-forum`;
    return this.http.post<Forum>(url, Forum, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }

  updateForum(Forum: Forum, id: Number) {
    const url = `${this.apiURL}/update-forum/${id}`;
    return this.http.put<Forum>(url, Forum, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }

  deleteForum(id: number) {
    const url = `${this.apiURL}/delete-forum/${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }

  cancelForum(id: number) {
    const url = `${this.apiURL}/cancel-forum`;
    return this.http.delete(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.token}`
      }),
    });
  }
}
