import { StandService } from 'src/app/stand.service';
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
      constructor(private route: ActivatedRoute, private standService: StandService, private router: Router) {}
      ngOnInit() {
        this.addForumForm = new FormGroup({
          number: new FormControl(null, [Validators.required]), // Default as null if not filled
          zone: new FormControl(null, [Validators.required]),   // Default as null
          statut: new FormControl(true, [Validators.required]), // Default to true or false
        });
        
      }
      onSubmit() {
        console.log(this.addForumForm.value);
        this.standService.addStand(this.addForumForm.value).subscribe(() => {
          this.router.navigateByUrl("/standList"); // Corrected to use parentheses instead of square brackets
        });
      }
}
