import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestSupplyService } from '../../service/request-supply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent {
  requestForm!: FormGroup;
  minDate = new Date(); 
  minDatePlusFourDays!: Date;

  constructor(private requests:RequestSupplyService,private router:Router){}
  ngOnInit(){
    const fourDays = 4 * 24 * 60 * 60 * 1000; // 4 days in milliseconds
    this.minDatePlusFourDays = new Date(this.minDate.getTime() + fourDays);
    this.requestForm= new FormGroup({
      quantity:new FormControl('',Validators.required),
      category: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required, this.minDateValidator.bind(this)]),
      description: new FormControl('',Validators.required),
      validity:new FormControl('',Validators.required),

    });

  }
  minDateValidator(control: FormControl): { [key: string]: any } | null {
    if (control.value && control.value < this.minDatePlusFourDays) {
      return { min: true }; // Error key for invalid date (less than minDatePlusFourDays)
    }
    return null;
  }

  onChangeDate(event: any) {
    const selectedDate = new Date(event.target.value);
    if (selectedDate < this.minDatePlusFourDays) {
      this.requestForm.controls['date'].setErrors({ min: true });  // Set min error manually
    } else {
      this.requestForm.controls['date'] .setErrors(null);  // Clear any existing errors
    }
    // Alternatively, you can trigger touched state here:
    // this.requestForm.get('date').markAsTouched();
  }
  onSubmit(){
    console.log(this.requestForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.requestForm.value,null,4))
  }
  reset(){
    this.requestForm.reset();
  }
ajouter(){
  this.requests.AddRequest(this.requestForm.value).subscribe(
    {next:()=>this.router.navigateByUrl('/supplyrequests'),
    error:(error)=>console.log(error)}
  )

}
}
