import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentimentalAnalysisService {

  constructor(private http: HttpClient) {}

  analyzeSentiment(text: string) {
    return this.http.post<any>('http://localhost:5002/sentiment', { text });
  }
}
