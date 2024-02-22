import { reservationStatus } from './../../model/reservationStatus';
import { Component } from '@angular/core';
import { PackServiceService } from 'src/app/Service/pack-service.service';
import { Pack } from 'src/app/model/pack';

@Component({
  selector: 'app-packs-list',
  templateUrl: './packs-list.component.html',
  styleUrls: ['./packs-list.component.css']
})
export class PacksListComponent {


  constructor(
    private packService: PackServiceService,
   
   
  ) {}

    reserved:reservationStatus =  reservationStatus.Reserved;
    onHold:reservationStatus = reservationStatus.On_Hold;
    notReserved:reservationStatus = reservationStatus.Not_Reserved;
 
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


 }
