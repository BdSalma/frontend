import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatureService } from 'src/app/service/candidature.service';
import { Interview } from 'src/app/model/interview';
@Component({
  selector: 'app-list-interview',
  templateUrl: './list-interview.component.html',
  styleUrls: ['./list-interview.component.css']
})
export class ListInterviewComponent {
  interview: Interview [] = [];
  constructor(private http: HttpClient,private router: Router,private candidatureService: CandidatureService){}
  ngOnInit():void {
    this.fetchInterview();
    
  }
  deleteInterview(id: number): void {
    this.candidatureService.delete(id).subscribe(
      {
        next: () => {
          console.log('Interview deleted successfully');
          // Optionally, you can reload the interview list after deletion
          this.fetchInterview();
        },
        error: (error) => console.log('Error deleting interview', error)
      }
    );
  }
  onDeleteClick(clientId: number) {
    const confirmation = window.confirm('Are you sure you want to delete this interview?');//changer l'alert
  
    if (confirmation) {
      console.log('Deleting client with ID:', clientId);
  
      const url = `http://localhost:8087/interview/deleteI/${clientId}`;
      this.http.delete(url).subscribe(
        response => {
          console.log('Client deleted successfully', response);
          // Refresh the list of clients after deletion
          this.fetchInterview();
        },
        error => {
          console.error('Error deleting client', error);
          console.log('Full error details:', error);
          // Handle error as needed
        }
        
      );
    }
  }
  
  fetchInterview() {
    this.candidatureService.getInterview().subscribe(
      (response: Interview[]) => {
        console.log('API Response:', response); // Log the API response
        this.interview = response;
        console.log('interview:', this.interview); 
      },
      error => {
        console.error('Error fetching interview', error);
        // Handle error as needed
      }
    );
  }

}
