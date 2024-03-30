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
  selectedFile: File | undefined;

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
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
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
      // Construct 'devis' object from form fields
      const devisData = {
        description: this.devisForm.get('description')?.value,
        price: this.devisForm.get('price')?.value,
        quantity: this.devisForm.get('quantity')?.value
      };
  
      // Append 'devis' object to FormData
      const formData = new FormData();
      formData.append('devis', JSON.stringify(devisData));
      formData.append('file', this.selectedFile!, this.selectedFile!.name);
  
      // Call the service function with the requestId and FormData
      this.devis.createDevisAndAssignToRequest(this.requestId,this.devisForm.value, formData).subscribe(
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
  
  
}
