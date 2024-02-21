import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stand } from '../model/stand';

@Injectable({
  providedIn: 'root'
})
export class StandServiceService {

  apiURL: string = 'http://localhost:8087/stand';
  
  constructor(private router: Router, private http: HttpClient ) { }

  listStand(): Observable<Stand[]>{
    const url = `${this.apiURL}/find-all-stands`;
    return this.http.get<Stand[]>(url);
  }

  getStandById(id: number): Observable<Stand> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Stand>(url);
  }

  getCurrentStand():Observable<Stand>{
    return this.http.get<Stand>(this.apiURL);
  }
  addStand(Stand: Stand): Observable<Stand> {

    const url = `${this.apiURL}/add-stand`;
    console.log(Stand, url);
    return this.http.post<Stand>(url, Stand);
  }

  updateStand(Stand: Stand,id:Number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<Stand>(url, Stand)
  }

  deleteStand(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }

}
