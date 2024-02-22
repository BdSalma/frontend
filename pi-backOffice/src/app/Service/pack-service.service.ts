import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pack } from '../model/pack';

@Injectable({
  providedIn: 'root'
})
export class PackServiceService {

  apiURL: string = 'http://localhost:8087/pack';
  
  constructor(private router: Router, private http: HttpClient ) { }

  listpack(): Observable<Pack[]>{
    const url = `${this.apiURL}/find-all-packs`;
    return this.http.get<Pack[]>(url);
  }

  getpackById(id: number): Observable<Pack> {
    const url = `${this.apiURL}/find-pack/${id}`;
    return this.http.get<Pack>(url);
  }

  getCurrentpack():Observable<Pack>{
    return this.http.get<Pack>(this.apiURL);
  }
  addpack(pack: Pack): Observable<Pack> {
    const url = `${this.apiURL}/add-pack`;
    console.log(url,pack)
    return this.http.post<Pack>(url, pack);
  }

  updatepack(id:Number,pack: Pack) {
    const url = `${this.apiURL}/update-pack/${id}`;
    console.log(url);
    
    return this.http.put<Pack>(url, pack)
  }

  deletepack(id: number) {
    const url = `${this.apiURL}/delete-pack/${id}`;
    return this.http.delete(url);
  }

}
