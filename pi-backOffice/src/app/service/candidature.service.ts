import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
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
    return this.http.get(`${this.baseUrl}/candidatbyoffer/2`);
  }
  getDataCandidat(): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidatbyuser/1`);
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  downloadCv(candidateId: number) {
    this.fetchBlob(this.baseUrl + '/download-cv/' + candidateId)
      .subscribe(cvBlob => {
        const url = window.URL.createObjectURL(cvBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cv.pdf'; // Adjust filename as needed
        link.click();
        link.remove();
      }, error => {
        console.error('Error downloading CV:', error);
        // Handle download errors (explained below)
      });
  }
  
  private fetchBlob(url: string): Observable<Blob> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/octet-stream'); // Set appropriate headers
  
    return this.http.get(url, { headers, responseType: 'blob' });
  }
  
  addCandidat(formData: FormData): Observable<any> {
    let url = `${this.baseUrl}/addcandidat/2/1?lettre=${formData.get('lettre')}`; // Replace with your actual URL
    return this.http.post<any>(url, formData); // Use generics for response type
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
