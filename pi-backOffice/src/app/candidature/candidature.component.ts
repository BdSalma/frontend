import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatureService } from '../service/candidature.service';
import { Candidature } from '../model/candidature';
@Component({
  selector: 'app-candidature', 
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent {
  candidat: Candidature [] = [];
  constructor(private http: HttpClient,private router: Router,private candidatureService: CandidatureService){}
  ngOnInit():void {
    this.fetchCandidat();
    
  }
  fetchCandidat() {
    this.candidatureService.getData().subscribe(
      (response: Candidature[]) => {
        console.log('API Response:', response); // Log the API response
        this.candidat = response;
        console.log('candidat:', this.candidat); 
      },
      error => {
        console.error('Error fetching candidat', error);
        // Handle error as needed
      }
    );
  }
  downloadCv(candidateId: number) {
    this.candidatureService.downloadCv(candidateId);
  }

  onEditClick(candidatId: number) {
    // Navigate to the update component with the client's ID as parameter
    this.router.navigate(['/updateC', candidatId]);
  }
  onAddIntervClick(candidatId: number) {
    // Navigate to the update component with the client's ID as parameter
    this.router.navigate(['/addInterv', candidatId]);
  }
  goToInterview() {
    // Navigate to the update component with the client's ID as parameter
    this.router.navigate(['/listInterv']);
  }
  acceptCandidature(candidateId: number) {
    this.candidatureService.accepterCandidature(candidateId).subscribe(
      (response: Candidature) => {
        console.log('Candidature accepted:', response);
        this.router.navigate(['/candidat']);
      },
      error => {
        console.error('Error accepting candidature', error);
        // Handle error as needed
      }
    );
  }
  
}
