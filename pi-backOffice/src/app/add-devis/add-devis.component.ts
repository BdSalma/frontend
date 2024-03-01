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

  @Input() requestSupplyId!: number; // Remove @Input decorator

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

    this.requestSupplyId = +this.route.snapshot.params['requestId']; // Get requestId from route parameters

  }

  onSubmit() {
    console.log(this.devisForm.value);
    alert('Success\n\n' + JSON.stringify(this.devisForm.value, null, 4));
  }

  reset() {
    this.devisForm.reset();
  }

  // ajouter() {
  //   this.devis.createDevisAndAssignToRequest(this.requestSupplyId, this.devisForm.value).subscribe(
  //     () => {
  //       console.log('Devis created and assigned successfully.');
  //       this.router.navigateByUrl('/devis');
  //     },
  //     error => {
  //       console.error('Error creating and assigning Devis:', error);
  //     }
  //   );
  // }
  ajouter(){
  this.devis.AddDevis(this.devisForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/devis'),
    error:(error)=>console.log(error)}
  )

}
}
