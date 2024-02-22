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

  addPackForm!: FormGroup;
  zones: string[] = [];
  constructor(private route: ActivatedRoute, private packService: PackServiceService, private router: Router) {}
  ngOnInit() {
    this.addPackForm = new FormGroup({
      typePack: new FormControl(null, [Validators.required]), // Assuming typePack is of TypePack type
       prix: new FormControl(0, [Validators.required, Validators.min(0)]) // Assuming prix is a number
    });
  }
  onSubmit() {
   
    this.packService.addpack(this.addPackForm.value).subscribe(() => {
    this.router.navigateByUrl("/packList"); // Corrected to use parentheses instead of square brackets
    });
  }

 
}

