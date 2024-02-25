import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sponsors!: Sponsor[];
  sponsor: Sponsor = new Sponsor(); // Make sure this matches your model

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.sponsors = data;
    });
  }

  reloadData() {
    this.userService.findAll();
  }

  onSubmit() {
    console.log(this.sponsor);
    // Here you can call userService to save sponsor data
    // For example, if you have a saveSponsor method in your service
    // this.userService.saveSponsor(this.sponsor).subscribe(...);
  }
  deleteSponsor(idSponsor: number) {
    this.userService.deleteSponsor(idSponsor).subscribe(() => {
      console.log('Sponsor deleted successfully');
      this.reloadData(); // Rechargez la liste des sponsors après la suppression
    }, error => {
      console.error('Error deleting sponsor:', error);
    });
  }



  editSponsor(sponsor: Sponsor) {
    this.userService.updateSponsor(sponsor).subscribe(updatedSponsor => {
      // Replace the existing sponsor with the updated one
      const index = this.sponsors.findIndex(sponsor => sponsor.name === updatedSponsor.name);
      if (index !== -1) {
        this.sponsors[index] = updatedSponsor;
      }
    });
  }
}