import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Stand } from '../model/stand';
import { StandServiceService } from '../service/stannd-service.service';
import { PackServiceService } from '../service/pacck-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pack-data-mining',
  templateUrl: './pack-data-mining.component.html',
  styleUrls: ['./pack-data-mining.component.css']
})
export class PackDataMiningComponent {
  packForm !: FormGroup;
  stands : Stand[]=[];
  pack :any = {
    numberOfOffers: 0,
    numberOfBadges: 0,
    numberOfFlyers: 0,
    displayLogo: true,
    insertFlyer: true,
  }; 
  currentId!: any;
  currentAction !: String; 
  selectedStand !: any;
  prediction !: any;
  constructor(private fb: FormBuilder, private packService: PackServiceService, private router: Router, 
    private standService:StandServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
    this.standService.getStandByStatut(false).subscribe((data)=>{
      this.stands = data;
    
    }) 
  }
  openDialog() {
    // Perform prediction logic before opening the dialog
    this.pack.numberOfOffers = this.packForm.get('numberOfOffers')?.value;
    this.pack.numberOfBadges = this.packForm.get('numberOfBadges')?.value;
    this.packService.packPredict(this.selectedStand, this.pack).subscribe((data) => {
      if (data.predicted_type === '0') {
        this.prediction = "Silver";
      } else if (data.predicted_type === '1') {
        this.prediction = "Gold";
      } else if (data.predicted_type === '2') {
        this.prediction = "Platinum";
      } else {
        this.prediction = "Diamond";
      }

      const modelDiv = document.getElementById('popup');
      if (modelDiv != null) {
        modelDiv.style.display = 'block';
      }
    });
  }

  handleDialogAction(event: any) {
    // Handle the action from the dialog
    this.onSubmit(event);
  }


  
  initForm(): void {
    this.packForm = new FormGroup({
      numberOfOffers:  new FormControl ('',[Validators.required]),
      numberOfBadges:  new FormControl ('',[Validators.required]),
      numberOfFlyers:  new FormControl ('',[Validators.required]),
      stand :  new FormControl ('',[Validators.required]),
      displayLogo:  new FormControl (false,[Validators.required]),
      insertFlyer:  new FormControl (false,[Validators.required])
    });
  }

  onSubmit(event : any): void {
     this.pack.numberOfOffers = this.packForm.get('numberOfOffers')?.value
     this.pack.numberOfBadges = this.packForm.get('numberOfBadges')?.value
     this.packService.packPredict(this.selectedStand,this.pack).subscribe((data)=>{
       
        if (data.predicted_type === '0') {
          this.prediction = "Silver";
        } else if (data.predicted_type === '1') {
          this.prediction = "Gold";
        } else if (data.predicted_type === '2') {
          this.prediction = "Platinum";
        } else {
          this.prediction = "Diamond";
        }   
        console.log(this.prediction);
        
     })
}}
