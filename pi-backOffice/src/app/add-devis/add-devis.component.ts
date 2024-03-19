import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevisService } from '../service/devis.service';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent {
  devisForm!: FormGroup;

 requestId!: number; 

  constructor(
    private devis: DevisService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.devisForm = new FormGroup({
      file: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    });

    const params = this.route.snapshot.params;
    if (params['requestId']) {
      this.requestId = +params['requestId'];
    } else {
      console.error('Missing requestId in route parameters');
      // Handle missing requestId (e.g., redirect, display error message)
    }
  }

  onSubmit() {
    console.log(this.devisForm.value);
    //alert('Success\n\n' + JSON.stringify(this.devisForm.value, null, 4));
  }

  reset() {
    this.devisForm.reset();
  }

  ajouter() {
    if (this.devisForm.valid) {
      this.devis.createDevisAndAssignToRequest(this.requestId, this.devisForm.value).subscribe(
        () => {
          console.log(this.requestId);
          console.log('Devis created and assigned successfully.');
          this.router.navigateByUrl('/devis'); // Navigate to 'devis' route after success
        },
        error => {
          console.error('Error creating and assigning Devis:', error);
          // Handle errors during devis creation (e.g., display error message)
        }
      );
    } else {
      console.error('Devis form is invalid!');
    }
  }
  // ajouter(){
  // this.devis.AddDevis(this.devisForm.value).subscribe(
  //   {next:()=>this.router.navigateByUrl('/devis'),
  //   error:(error)=>console.log(error)}
  // )

// }
}
