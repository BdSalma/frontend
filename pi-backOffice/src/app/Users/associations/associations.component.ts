import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Society } from 'src/app/model/society';
import { SocietyRole } from 'src/app/model/societyRole';
import { Authentication } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css'],
})
export class AssociationsComponent {
  constructor(
    private consumer: Authentication,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  societies: Society[] = [];
  listFilter!: FormGroup;
  societyRole: SocietyRole[] = Object.values(SocietyRole);
  ngOnInit(): void {
    this.consumer.getAllSocieties().subscribe((data) => {
      console.log(data);
      this.societies = data;
    });
    this.listFilter = this.formBuilder.group({
      role: [''],
      search: [''],
    });
    this.listFilter.get('role')?.valueChanges.subscribe((role) => {
      this.roleFilter(role);
    });
  }

  searchFilter(form: FormGroup) {
    this.consumer
      .getAllSocietiesFilteredByField(form.get('search')!.value)
      .subscribe({
        next: (filteredSocieties: Society[]) => {
          this.societies = filteredSocieties;
        },
        error: () => {
          this.consumer.getAllSocieties().subscribe((data) => {
            console.log(data);
            this.societies = data;
          });
        },
      });
  }
  roleFilter(role: SocietyRole) {
    this.consumer.getAllSocietiesFilteredByRole(role).subscribe({
      next: (filteredSocieties: Society[]) => {
        this.societies = filteredSocieties;
      },
      error: () => {
        this.consumer.getAllSocieties().subscribe((data) => {
          console.log(data);
          this.societies = data;
        });
      },
    });
  }

  approveUser(id: string) {
    this.consumer.approveUser(id).subscribe({
      next: (updatedIndividu: any) => {
        const index = this.societies.findIndex((society) => society.id === id);
        if (index !== -1) {
          this.societies[index] = updatedIndividu;
        }
        this.toastr.success('User approved successfully');
      },
      error: (error: any) => {
        this.toastr.error(error.error.message);
      },
    });
  }

  activateUser(id: string) {
    this.consumer.activateUser(id).subscribe({
      next: (updatedIndividu: any) => {
        const index = this.societies.findIndex((society) => society.id === id);
        if (index !== -1) {
          this.societies[index] = updatedIndividu;
        }
        console.log(updatedIndividu);
        const message = updatedIndividu.activate ? 'activated' : 'desactivated';
        this.toastr.success(`User ${message} successfully`);
      },
      error: (error: any) => {
        this.toastr.error(error.error.message);
      },
    });
  }
}
