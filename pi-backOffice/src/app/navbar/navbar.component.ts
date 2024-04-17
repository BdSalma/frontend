import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../service/candidature.service';
import { Authentication } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  newCandidaturesCount: number = 0;
 
  constructor(private cs: CandidatureService, private authService: Authentication, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Assuming you have a method to get the current user ID from authentication service
    this.loadNewCandidaturesCount();
  }

  loadNewCandidaturesCount(): void {
    this.cs.getNewCandidaturesCount().subscribe(
      count => {
        this.newCandidaturesCount = count;
      },
      error => {
        console.error('Error fetching new candidatures count:', error);
        // Handle error if necessary
      }
    );
  }
  showNotificationMessage(): void {
    // Affiche une alerte ou une boîte de dialogue contenant le message avec le nombre de nouvelles candidatures en cours
    this.toastr.success(`Vous avez ${this.newCandidaturesCount} candidature(s) en attente.`);
  }
}
