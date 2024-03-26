import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService } from 'src/app/service/pack.service';
import { StandService } from 'src/app/service/stand.service';
import { Pack } from 'src/app/model/pack';
import { Stand } from 'src/app/model/stand';


@Component({
  selector: 'app-reservation-pack',
  templateUrl: './reservation-pack.component.html',
  styleUrls: ['./reservation-pack.component.css']
})
export class ReservationPackComponent {


  constructor(
    private packService: PackService,
    private StandService: StandService,
    private Router: Router,
    private route: ActivatedRoute
   
  ) {}

  packs: Pack[]=[];
  typePack !: string; 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const t = params['typePack'];
      if (t === '0') {
        this.typePack = "Silver";
      } else if (t === '1') {
        this.typePack = "Gold";
      } else if (t === '2') {
        this.typePack = "Platinum";
      } else {
        this.typePack = "Diamond";
      }   
    
      this.packService.getpackByTypePack(this.typePack,"Not_Reserved").subscribe((data) => {
        this.packs = data;
        console.log(data)
      }); 
    });  
  }

  bookPack(id: number) {
    
    
    const userId = 1;
    this.packService.bookPack(id, userId).subscribe();
  }

}
