import { StandService } from '../../service/stand.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService } from 'src/app/service/pack.service';
import { Pack } from 'src/app/model/pack';
import { Stand } from 'src/app/model/stand';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent {

  addPackForm!: FormGroup;
  zones: string[] = [];
  stands : Stand[]=[];
  pack :any = {
    typePack: '',
    prix: 0,
  };

  id !: any ; 
  constructor(private route: ActivatedRoute, private packService: PackService, private router: Router, 
              private standService:StandService) {}
  ngOnInit() {
    this.standService.getStandByStatut(false).subscribe((data)=>{
      console.log(data)
      this.stands = data;
    })
    this.addPackForm = new FormGroup({
      typePack: new FormControl(null, [Validators.required]), 
      prix: new FormControl(0, [Validators.required, Validators.min(0),Validators.max(10000)]),
      stand : new FormControl(null, [Validators.required])
    });
  }

  onSubmit() { 
    this.pack.typePack = this.addPackForm.get('typePack')?.value;
    this.pack.prix = this.addPackForm.get('prix')?.value; 
    const number = this.addPackForm.get('stand')?.value;
    
    this.stands.forEach(stand => {
    if(stand.number == number){
      this.id = stand.id;
    }
    });
    this.packService.addpack(this.pack,this.id).subscribe(() => {
      this.router.navigateByUrl('/packList');
    });

  }

 
}
