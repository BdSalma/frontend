import { StandService } from '../../service/stand.service';
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
          number: new FormControl(0, [Validators.required]),
          zone: new FormControl('', [Validators.required]),
        
        
        });
      }
      onSubmit() {
        console.log(this.addForumForm.value);
        this.standService.addStand(this.addForumForm.value).subscribe(() => {
          this.router.navigateByUrl("/standList"); // Corrected to use parentheses instead of square brackets
        });
      }
}