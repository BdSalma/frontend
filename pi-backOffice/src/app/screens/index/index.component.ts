
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForumServiceService } from 'src/app/Service/forum-service.service';

import { OfferService } from 'src/app/service/offer.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  listOffer!:any;
  forum !: any;

  constructor(private offerS:OfferService,private router:Router, private forumService:ForumServiceService){}
  ngOnInit(): void {
    this.loadOffers();
    this.forumService.getCurrentForum().subscribe((data)=> this.forum = data)
  }

  loadOffers() {
    this.offerS.getOffers().subscribe(
      (data) => {
        this.listOffer = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
