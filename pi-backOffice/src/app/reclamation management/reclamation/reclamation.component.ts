import { Component } from '@angular/core';
import { Reclamation } from '../../model/reclamation';
import { User } from '../../model/user';
import { TypeReclamation } from '../../model/typeReclamation';
import { ReclamationService } from '../../service/reclamation.service';
import { Authentication } from '../../service/authentication.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(
    private reclamationService: ReclamationService,
    private auth : Authentication
  ) {}
  reclamations : Reclamation[] = [];
  reclamationType = TypeReclamation;
  users : any[]=[];

  ngOnInit(): void {
    this.reclamationService.getReclamation().subscribe((data) => {
      console.log(data);
      this.reclamations = data;
    });
    this.auth.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
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

  ReviewReclamation(user : User){
    this.reclamationService
    .Review("27d46be2-d99c-40ca-9cc6-2be316354e5a")
    .subscribe(
      () =>
        (this.users = this.users.filter(
          (rec: User) => rec != user
        ))
    );
  }
}
