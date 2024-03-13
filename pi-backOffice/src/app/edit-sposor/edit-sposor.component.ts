import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sponsor } from '../model/sponsor';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-edit-sposor',
  templateUrl: './edit-sposor.component.html',
  styleUrls: ['./edit-sposor.component.css']
})
export class EditSposorComponent {
  sponsor: Sponsor = new Sponsor();

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // Assuming your route parameter is 'id'
      this.userService.findSponsorById(id).subscribe(sponsor => {
        this.sponsor = sponsor;
      });
    });
  }

  onSubmit() {
    this.userService.updateSponsor(this.sponsor).subscribe(updatedSponsor => {
      console.log('Sponsor updated successfully:', updatedSponsor);
      // Optionally, navigate back to the sponsor list or another page
      this.router.navigate(['/users']);
    });
  }
}
