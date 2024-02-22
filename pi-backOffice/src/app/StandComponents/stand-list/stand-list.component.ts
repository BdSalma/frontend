import { Stand } from './../../model/stand';
import { Component } from '@angular/core';
import { StandServiceService } from 'src/app/Service/stand-service.service';


@Component({
  selector: 'app-stand-list',
  templateUrl: './stand-list.component.html',
  styleUrls: ['./stand-list.component.css']
})
export class StandListComponent {


  constructor(
    private standService: StandServiceService,
  ) {}

  stands: Stand[]=[];

  ngOnInit(): void {
    this.standService.listStand().subscribe((data) => {
      console.log(data);
      this.stands = data;
    });
  }
  
  deleteStand(id: number) {
    this.standService.deleteStand(id).subscribe( () =>
    (this.stands = this.stands.filter(
      (stand: Stand) => stand.id != id
    ))
  );
  }
}
