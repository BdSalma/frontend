import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private baseUrl = "http://localhost:8087/candidat";
  private baseUrl1 = "http://localhost:8087/interview";
  private baseUrl2 = "http://localhost:8087/room";
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidatbyoffer/1`);
  }
  
  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl2}/allrooms`);
  }
  getInterview(): Observable<any> {
    return this.http.get(`${this.baseUrl1}/allInterview`);
  }
  
  updateCandidature(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateCandidat/${id}`, updatedData);
  }
  getById(id:number): Observable<any>{
     return this.http.get(`${this.baseUrl}/${id}`);
  }
  delete(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl1}/deleteI/${id}`);
 }
 /* addInterview(id: number,interview:any,roomId?: number): Observable<any> {
    let url = `${this.baseUrl1}/addI/${id}`;
  
  if (roomId !== undefined && roomId !== null) {
    url += `?room=${roomId}`;
  }

  return this.http.post(url, interview);
  } */

  addInterview(url: string, interview: any): Observable<any> {
    return this.http.post(url, interview);
  }
}
