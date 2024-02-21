import { StandServiceService } from './../../Service/stand-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-stand',
  templateUrl: './add-stand.component.html',
  styleUrls: ['./add-stand.component.css']
})
export class AddStandComponent {
 
    
      addForumForm!: FormGroup;
      zones: string[] = [];
      constructor(private route: ActivatedRoute, private standService: StandServiceService, private router: Router) {}
      ngOnInit() {
        this.addForumForm = new FormGroup({
          zone: new FormControl('', [Validators.required]),
          number: new FormControl(0, [Validators.required])
        });
      }
      onSubmit() {
        console.log(this.addForumForm.value);
        this.standService.addStand(this.addForumForm.value).subscribe(() => {
          this.router.navigateByUrl("/standList"); // Corrected to use parentheses instead of square brackets
        });
      }
}
