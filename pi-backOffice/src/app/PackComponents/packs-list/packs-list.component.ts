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
  reserved!: reservationStatus.Reserved;
  onHold!: reservationStatus.On_Hold;
  notReserved!: reservationStatus.Not_Reserved;

  packs: Pack[]=[];
  ngOnInit(): void {
    this.packService.listpack().subscribe((data) => {
      console.log(data);
      this.packs = data;
    });
  }

 }
