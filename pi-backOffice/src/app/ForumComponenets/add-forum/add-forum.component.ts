import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.addForumForm = new FormGroup({
      zone: new FormControl('', [Validators.required]),
      number: new FormControl(0, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.addForumForm.value);
  }
}
