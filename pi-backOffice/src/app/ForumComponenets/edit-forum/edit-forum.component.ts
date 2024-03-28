import { ForumService } from 'src/app/service/forum.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-forum',
  templateUrl: './edit-forum.component.html',
  styleUrls: ['./edit-forum.component.css']
})
export class EditForumComponent {
  
  updateForumForm!: FormGroup;
  zones: string[] = [];
  forumId!: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumService: ForumService
  ) {}

  ngOnInit() {
    
    this.updateForumForm = new FormGroup({
      theme: new FormControl('', [Validators.required]),
      date: new FormControl(null, [Validators.required, this.futureDateValidator]),
      localisation: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])  
    });

    
     this.forumId = this.route.snapshot.params['id'];

    
    if (this.forumId) {
      
      this.forumService.getForumById(this.forumId).subscribe((forumDetails) => {
       console.log(forumDetails);
       
        this.updateForumForm.patchValue(forumDetails)/*{
          theme: forumDetails.theme,
          date: forumDetails.date,
          localisation: forumDetails.localisation,
          description: forumDetails.description
        });*/
      });
    }
  }

  futureDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate > currentDate ? null : { 'invalidFutureDate': true };
  }
  onSubmit() {
    this.forumService.updateForum(this.updateForumForm.value,this.forumId).subscribe(() => {
      this.router.navigateByUrl("/forumList");
      });
  }
}