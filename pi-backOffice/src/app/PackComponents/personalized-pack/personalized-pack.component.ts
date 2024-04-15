import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PackServiceService } from 'src/app/Service/pack-service.service';
import { StandServiceService } from 'src/app/Service/stand-service.service';
import { Pack } from 'src/app/model/pack';
import { Stand } from 'src/app/model/stand';

@Component({
  selector: 'app-personalized-pack',
  templateUrl: './personalized-pack.component.html',
  styleUrls: ['./personalized-pack.component.css']
})
export class PersonalizedPackComponent  implements OnInit {

  packForm !: FormGroup;
  stands : Stand[]=[];
  pack !: any; 
  currentId!: any;
  currentAction !: String; 
  selectedStand !: any;
  constructor(private fb: FormBuilder, private packService: PackServiceService, private router: Router, 
    private standService:StandServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
    this.standService.getStandByStatut(false).subscribe((data)=>{
      this.stands = data;
    
    }) 
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

  onSubmit(): void {
     this.pack = {
      numberOfOffers: this.packForm.get('numberOfOffers')?.value,
      numberOfBadges: this.packForm.get('numberOfBadges')?.value,
      numberOfFlyers: this.packForm.get('numberOfFlyers')?.value,
      displayLogo: this.packForm.get('displayLogo')?.value,
      insertFlyer: this.packForm.get('insertFlyer')?.value
  };
  console.log("d5alna");
  // Recherche du stand correspondant au numéro sélectionné dans le formulaire
    this.selectedStand = this.stands.find(stand => stand.number === this.packForm.get('stand')?.value);
  
  // Si un stand correspondant est trouvé, envoyez la requête au service pour créer le pack personnalisé
 
    console.log(this.pack);
     this.packService.createPersonalizedPack(this.selectedStand.id,this.pack).subscribe({
      next: () => {
        console.log(this.pack);
        this.toastr.success('La demande  a été enregistré avec succés');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  

  }}