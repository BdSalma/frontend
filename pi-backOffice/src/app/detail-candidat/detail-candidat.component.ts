import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatureService } from '../service/candidature.service';

@Component({
  selector: 'app-detail-candidat',
  templateUrl: './detail-candidat.component.html',
  styleUrls: ['./detail-candidat.component.css']
})
export class DetailCandidatComponent {
  id!:number;
  candidat!:any;
  constructor(private route: ActivatedRoute,private service:CandidatureService){
    this.id=this.route.snapshot.params['id'];
    }
    ngOnInit(){
  
      this.service.getById(this.id).subscribe({next:(data)=>this.candidat=data}
      );
     }
}
