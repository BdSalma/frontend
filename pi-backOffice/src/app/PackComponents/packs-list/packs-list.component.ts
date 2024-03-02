import { Router } from '@angular/router';
import { StandServiceService } from 'src/app/Service/stand-service.service';
import { reservationStatus } from './../../model/reservationStatus';
import { Component } from '@angular/core';
import { PackServiceService } from 'src/app/Service/pack-service.service';
import { Pack } from 'src/app/model/pack';
import { Stand } from 'src/app/model/stand';


@Component({
  selector: 'app-packs-list',
  templateUrl: './packs-list.component.html',
  styleUrls: ['./packs-list.component.css']
})
export class PacksListComponent {


  constructor(
    private packService: PackServiceService,
    private StandServiceService: StandServiceService,
    private Router: Router
   
  ) {}

    reserved:reservationStatus =  reservationStatus.Reserved;
    onHold:reservationStatus = reservationStatus.On_Hold;
    notReserved:reservationStatus = reservationStatus.Not_Reserved;
 
  stands : Stand[]=[];
  packs: Pack[]=[];
  ngOnInit(): void {
    this.packService.listpack().subscribe((data) => {
      console.log(data);
      this.packs = data;
    });
  }

  deletePack(id: number) {
    this.packService.deletepack(id).subscribe( () =>
    (this.packs = this.packs.filter(
      (pack: Pack) => pack.id != id
    ))
);
}

addPack() {
  this.StandServiceService.getStandByStatut(false).subscribe((data)=>{
    this.stands = data;

    if (this.stands.length >= 1) {
      this.Router.navigate(['/addPack']);
    } else {
    
    }
  });
}
  
 }