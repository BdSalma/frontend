import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackServiceService } from 'src/app/Service/pack-service.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent {

  addForumForm!: FormGroup;
  zones: string[] = [];
  constructor(private route: ActivatedRoute, private packService: PackServiceService, private router: Router) {}
  ngOnInit() {
    this.addForumForm = new FormGroup({
      zone: new FormControl('', [Validators.required]),
      number: new FormControl(0, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.addForumForm.value);
    this.packService.addpack(this.addForumForm.value).subscribe(() => {
      this.router.navigateByUrl("/standList"); // Corrected to use parentheses instead of square brackets
    });
  }
}

