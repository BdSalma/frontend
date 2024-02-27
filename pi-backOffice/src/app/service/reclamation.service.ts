import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../model/reclamation';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http : HttpClient) { }

  getReclamation(){
    return  this.http.get<Reclamation[]>('http://localhost:8087/reclamation/retrieve')
   }
   deleteReclamation(id: number) {
    return this.http.delete('http://localhost:8087/reclamation/delete/' + id);
  }
}
