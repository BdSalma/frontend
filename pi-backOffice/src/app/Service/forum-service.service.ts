import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from '../model/forum';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {
  apiURL: string = 'http://localhost:8087/forum';
  
  constructor(private router: Router, private http: HttpClient ) { }

  listForum(): Observable<Forum[]>{
    const url = `${this.apiURL}/find-all-forums`;
    return this.http.get<Forum[]>(url);
  }

  getForumById(id: number): Observable<Forum> {
    const url = `${this.apiURL}/find-forum/${id}`;
    console.log(this.http.get<Forum>(url));
    return this.http.get<Forum>(url);
  }

  getCurrentForum():Observable<Forum>{
    const url = `${this.apiURL}/find-all-forums`;
    return this.http.get<Forum>(this.apiURL);
  }
  addForum(Forum: Forum): Observable<Forum> {
    const url = `${this.apiURL}/add-forum`;
    return this.http.post<Forum>(url, Forum);
  }

  updateForum(Forum: Forum,id:Number) {
    const url = `${this.apiURL}/update-forum/${id}`;
    return this.http.put<Forum>(url, Forum)
  }

  deleteForum(id: number) {
    const url = `${this.apiURL}/delete-forum/${id}`;
    return this.http.delete(url);
  }

  cancelForum(id: number) {
    const url = `${this.apiURL}/cancel-forum`;
    return this.http.delete(url);
  }

}
