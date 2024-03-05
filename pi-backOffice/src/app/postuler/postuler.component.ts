import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatureService } from '../service/candidature.service';
import { Room } from '../model/room';
@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent {
  id!: number;
  candidat: any;
  registerForm!: FormGroup;
  selectedFile: File | undefined;
  selectedFile1: File | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private candidatureService: CandidatureService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      cv: ['',Validators.required],
      lettre:['',Validators.required],
      
    });
  
  }
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
  onFileChange1(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile1 = fileList[0];
    }
  }
  reset() {
    this.registerForm.reset();
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
  Add() {
    
      const formData = new FormData();
      formData.append('cv', this.selectedFile!, this.selectedFile!.name); // Use ! to assert non-null
      formData.append('lettre', this.selectedFile1!, this.selectedFile1!.name); // Append lettre value from form

    this.candidatureService.addCandidat(formData).subscribe(
      {
        next: () => this.router.navigateByUrl('/listCandidat'),
        error: (error) => console.log(error)
      }
    );
  }
  goToCandidature() {
    // Navigate to the update component with the client's ID as parameter
    this.router.navigate(['/listCandidat']);
  }   

}
