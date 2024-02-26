import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sponsor } from './sponsor';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8087/api/sponsors';
  }

  public findAll(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.usersUrl);
  }

  public save(user: Sponsor) {
    return this.http.post<Sponsor>(this.usersUrl, user);
  }
  deleteSponsor(idSponsor: number): Observable<void> {
    const url = `${this.usersUrl}/${idSponsor}`;
    return this.http.delete<void>(url);
  }
  
 

  public findSponsorById(id: number): Observable<Sponsor> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<Sponsor>(url);
  }


  public updateSponsor(sponsor: Sponsor): Observable<Sponsor> {
    const url = `${this.usersUrl}/${sponsor.idSponsor}`;
    return this.http.put<Sponsor>(url, sponsor);
  }


  makeCall(phoneNumber: string): Observable<any> {
    // Implémentez ici la logique pour initier l'appel avec le numéro de téléphone donné
    // Par exemple, vous pouvez appeler une API qui gère les appels
    // Assurez-vous d'adapter cette méthode à votre propre logique de gestion des appels
    console.log(`Initiating call to ${phoneNumber}...`);
    // Retournez un observable pour gérer la réponse de l'appel
    return this.http.post<any>('http://example.com/make-call', { phoneNumber });
  }

}