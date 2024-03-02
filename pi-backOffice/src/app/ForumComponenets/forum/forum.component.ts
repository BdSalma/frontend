import { Component, OnInit } from '@angular/core';
import { ForumServiceService } from 'src/app/Service/forum-service.service';
import { Forum } from 'src/app/model/forum';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {


  constructor(
    private forumService: ForumServiceService, private dialog: MatDialog, private router: Router
  ) { }

  forums: Forum[] = [];
  openPopup: boolean = false;
  test :boolean = false; 

  ngOnInit(): void {
    this.forumService.listForum().subscribe((data) => {
      console.log(data);
      this.forums = data;
    });
  }

  cancelForum(id: number) {
    this.forumService.deleteForum(id).subscribe(() =>
    (this.forums = this.forums.filter(
      (forum: Forum) => forum.id != id
    ))
    );
  }

  addForum() {
    const isInProgress = this.forums.some(forum => forum.forumStatus === 'In_Progress');
    if (isInProgress) {
        console.log("Il y a un forum en cours (statut 'In_Progress').");
    } else {
        console.log("Aucun forum en cours. Redirection vers '/addForum'");
        this.router.navigate(['/addForum']);
    }}
}



