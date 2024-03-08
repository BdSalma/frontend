import { Component } from '@angular/core';
import { Forum } from '../../model/forum';
import { Individu } from 'src/app/model/individus';
import { Authentication } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { IndividuRole } from 'src/app/model/individusRole';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.css'],
})
export class IndividualsComponent {
  constructor(
    private consumer: Authentication,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  individus: Individu[] = [];
  listFilter!: FormGroup;
  individuRole: IndividuRole[] = Object.values(IndividuRole).filter((role) => {
    return (
      role !== IndividuRole.Admin &&
      role !== IndividuRole.Community &&
      role !== IndividuRole.FinancialDirection
    );
  });
  ngOnInit(): void {
    this.consumer.getAllIndividu().subscribe((data) => {
      console.log(data);
      this.individus = data;
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
    this.consumer.getAllIndividuFilteredByField(form.get('search')!.value).subscribe({
      next: (filteredIndividus: Individu[]) => {
        this.individus = filteredIndividus;
      },
      error: () => {
        this.consumer.getAllIndividu().subscribe((data) => {
          console.log(data);
          this.individus = data;
        });
      },
    });
  }
  roleFilter(role: IndividuRole) {
    this.consumer.getAllIndividuFilteredByRole(role).subscribe({
      next: (filteredIndividus: Individu[]) => {
        this.individus = filteredIndividus;
      },
      error: () => {
        this.consumer.getAllIndividu().subscribe((data) => {
          console.log(data);
          this.individus = data;
        });
      },
    });
  }
  
  approveUser(id: string) {
    this.consumer.approveUser(id).subscribe({
      next: (updatedIndividu: any) => {
        const index = this.individus.findIndex(
          (individu) => individu.id === id
        );
        if (index !== -1) {
          this.individus[index] = updatedIndividu;
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
        const index = this.individus.findIndex(
          (individu) => individu.id === id
        );
        if (index !== -1) {
          this.individus[index] = updatedIndividu;
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