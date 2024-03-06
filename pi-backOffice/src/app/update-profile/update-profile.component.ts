import { Component } from '@angular/core';
import { Authentication } from '../services/authentication.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category';
import { SocietyRole } from '../model/societyRole';
import { IndividuRole } from '../model/individusRole';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  userData: any;
  updateProfile!: FormGroup;
  societyRole: SocietyRole[] = Object.values(SocietyRole);
  individuRole: IndividuRole[] = Object.values(IndividuRole);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private consumer: Authentication,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userData = this.consumer.getUserFromLocal;
    this.updateProfile = this.formBuilder.group({
      role: [''],

      representative: [''],
      adresse: [''],
      matricule: [''],
      logo: [''],
      sector: [''],

      firstName: [''],
      lastName: [''],
    });
    this.updateProfile.patchValue(this.userData);
  }
  update(form: any) {
    console.log(form);
    this.consumer.updateUser(this.userData.id, form).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.consumer.updateLocalUser(response);
        console.log(response);
        this.toastr.success("Your account has been updated successfully");
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }
}
