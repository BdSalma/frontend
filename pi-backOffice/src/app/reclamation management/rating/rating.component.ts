import { Component, Input } from '@angular/core';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() reclamationId!: number;
  selectedRating!: number;

  constructor(private reclamationService: ReclamationService) {}

  rateReclamation() {
    this.reclamationService.rateReclamation(this.reclamationId, this.selectedRating)
      .subscribe(response => {
        console.log('Rating submitted successfully');
        // Handle success or error
      });
  }
  getStarIcon(star: number): string {
    return this.selectedRating >= star ? '&#9733;' : '&#9734;'; // Unicode for filled and empty star
  }
}
