import { Component } from '@angular/core';
import { Reclamation } from '../model/reclamation';
import { User } from '../model/user';
import { TypeReclamation } from '../model/typeReclamation';
import { ReclamationService } from '../service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(
    private reclamationService: ReclamationService,
  ) {}
  reclamations : Reclamation[] = [];
  reclamationType = TypeReclamation;

  ngOnInit(): void {
    this.reclamationService.getReclamation().subscribe((data) => {
      console.log(data);
      this.reclamations = data;
    });
  }

  getReclamationTypeString(type: TypeReclamation): string {
    switch (type) {
      case TypeReclamation.Technical:
        return 'Technical';
      case TypeReclamation.Feed:
        return 'Feed-Back';
      // Add more cases if needed
      default:
        return 'Unknown';
    }
  }

  deleteReclamation(reclamation: Reclamation) {
    this.reclamationService
      .deleteReclamation(reclamation.id)
      .subscribe(
        () =>
          (this.reclamations = this.reclamations.filter(
            (rec: Reclamation) => rec != reclamation
          ))
      );
  }
  ReviewReclamation(user : User, reclamation: Reclamation){
    this.reclamationService
    .Review(user.id,reclamation.id)
    .subscribe(
      () =>
        (this.reclamations = this.reclamations.filter(
          (rec: Reclamation) => rec != reclamation
        ))
    );
  }
}
