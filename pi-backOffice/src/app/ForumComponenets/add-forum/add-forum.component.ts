import { ForumServiceService } from 'src/app/Service/forum-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent {
update() {
throw new Error('Method not implemented.');
}
reset() {
throw new Error('Method not implemented.');
}

  addForumForm!: FormGroup;
  zones: string[] = [];
  constructor(private route: ActivatedRoute, private router:Router, private forumService: ForumServiceService) {}
  ngOnInit() {
    this.addForumForm = new FormGroup({
      theme: new FormControl('', [Validators.required]),
      date: new FormControl(null, [Validators.required, this.futureDateValidator]),// assuming you want to initialize with current date
      localisation: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])  
    });
  }

  futureDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate > currentDate ? null : { 'invalidFutureDate': true };
  }
  onSubmit() {
    this.forumService.addForum(this.addForumForm.value).subscribe(() => {
      this.router.navigateByUrl("/forumList"); // Corrected to use parentheses instead of square brackets
      });
  }
}
