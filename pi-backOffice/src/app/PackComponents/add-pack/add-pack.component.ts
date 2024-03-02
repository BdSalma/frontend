import { StandServiceService } from './../../Service/stand-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackServiceService } from 'src/app/Service/pack-service.service';
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
  constructor(private route: ActivatedRoute, private packService: PackServiceService, private router: Router, 
              private standService:StandServiceService) {}
  ngOnInit() {
    this.standService.getStandByStatut(false).subscribe((data)=>{
      console.log(data)
      this.stands = data;
    })
    this.addPackForm = new FormGroup({
      typePack: new FormControl(null, [Validators.required]), 
      prix: new FormControl(0, [Validators.required, Validators.min(0)])
      //stand : new FormControl(null, [Validators.required])
    });
  }
  onSubmit() { 
    this.packService.addpack(this.addPackForm.value).subscribe(() => {
      this.router.navigateByUrl('/packList');
    });
  }

 
}

