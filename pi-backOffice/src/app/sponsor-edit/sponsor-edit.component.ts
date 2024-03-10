import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sponsor } from '../sponsor';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-sponsor-edit',
  templateUrl: './sponsor-edit.component.html',
  styleUrls: ['./sponsor-edit.component.css']
})
export class SponsorEditComponent implements OnInit {
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
