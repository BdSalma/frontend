import { Component, OnInit } from '@angular/core';
import { ForumServiceService } from 'src/app/Service/forum-service.service';
import { Forum } from 'src/app/model/forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private forumService: ForumServiceService,
   
  ) {}

  forums: Forum[]=[];
  ngOnInit(): void {
    this.forumService.listForum().subscribe((data) => {
      console.log(data);
      this.forums = data;
    });
  }

}
