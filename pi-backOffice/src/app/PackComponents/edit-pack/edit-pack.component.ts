import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackServiceService } from 'src/app/Service/pack-service.service';
import { Pack } from 'src/app/model/pack';


@Component({
  selector: 'app-edit-pack',
  templateUrl: './edit-pack.component.html',
  styleUrls: ['./edit-pack.component.css']
})
export class EditPackComponent {
  updatePackForm!: FormGroup;
  zones: string[] = [];
  id !: any; 
  pack!:Pack
  constructor(private route: ActivatedRoute, private packService: PackServiceService, private router: Router) {}

  ngOnInit() {
    this.updatePackForm = new FormGroup({
      typePack: new FormControl(null, [Validators.required]),
      prix: new FormControl(0, [Validators.required, Validators.min(0)])
    });

    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.packService.getpackById(this.id).subscribe(pack => {
        this.updatePackForm.setValue({
          typePack: pack.typePack,
          prix: pack.prix
        });
      });
    });
  }

  onSubmit() {
    console.log(this.id, this.updatePackForm.value);
       this.pack = this.updatePackForm.value ;

      this.packService.updatepack(this.id, this.updatePackForm.value).subscribe(() => {
      this.router.navigateByUrl('/packList');
    });
  }
}


