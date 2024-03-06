import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatureService } from '../service/candidature.service';
import { Room } from '../model/room';
import { Interview } from '../model/interview';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  id!: number;
  candidat: any;
  registerForm!: FormGroup;
  rooms: Room[] = [];
  calendarConfig = {}; 
  isOnline: boolean = false;
  isInRoom: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private candidatureService: CandidatureService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      date: ['', Validators.required],
      lien: [''],
      room: [[]],
      interviewType: ['choisir une option'],
      titre:['']
    });
  
    this.registerForm.get('interviewType')?.valueChanges.subscribe((type) => {
      this.isOnline = type === 'online';
      this.isInRoom = type === 'inRoom';
    });

    this.id = this.route.snapshot.params['id'];
    this.candidatureService.getRooms().subscribe(
      (response: Room[]) => {
        this.rooms = response;
      },
      error => {
        console.error('Error fetching rooms', error);
      }
    );
    
    this.fetchInterviews();
  }
  fetchInterviews() {
    this.candidatureService.getInterview().subscribe(
      (interviews: Interview[]) => {
        this.calendarConfig = {
          initialView: 'dayGridMonth', // Adjust initial view as needed
          events: interviews.map(interview => ({
            id: interview.idInterview, // Assuming it's a unique identifier
            title: interview.titre,
            start: interview.date,
          })),
          // Other calendar options: selectable, selectHelper, eventClick, etc.
        };
      },
      error => console.error('Error fetching interviews:', error)
    );
  }
  reset() {
    this.registerForm.reset();
  }

  Annuler() {
    this.router.navigate(['/listInterv']);
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  /*Add() {
    console.log('Data to be sent:', this.registerForm.value);

    const roomNum = this.registerForm.value.room !== null ? this.registerForm.value.room.toString() : null;
    this.candidatureService.addInterview(this.id, this.registerForm.value, roomNum).subscribe(
      {
        next: () => this.router.navigateByUrl('/candidat'),
        error: (error) => console.log(error)
      }
    );
  }*/
  Add() {
    console.log('Data to be sent:', this.registerForm.value);
  
    const interviewData = {
      idInterview: this.id,
      interviewType: this.registerForm.value.interviewType,
      date: this.registerForm.value.date,
      lien: this.registerForm.value.lien,
      titre :this.registerForm.value.titre,
      room: [
        {
          idRoom: this.registerForm.value.room,
          num: this.registerForm.value.room,
          status: 'AVAILABLE'
        }
      ]
    };
  
    const roomNum = this.registerForm.value.room;
    const url = `http://localhost:8087/interview/addI/${this.id}?room=${roomNum}`;
    
    this.candidatureService.addInterview(url, interviewData).subscribe(
      {
        next: () => this.router.navigateByUrl('/listInterv'),
        error: (error) => console.log(error)
      }
    );
  }
  Add1(){
    console.log('Data to be sent:', this.registerForm.value);
  
    const interviewData = {
      idInterview: this.id,
      interviewType: this.registerForm.value.interviewType,
      date: this.registerForm.value.date,
      lien: this.registerForm.value.lien,
      titre :this.registerForm.value.titre,
      
    };
  
    const url = `http://localhost:8087/interview/addIEnligne/${this.id}`;
    
    this.candidatureService.addInterview(url, interviewData).subscribe(
      {
        next: () => this.router.navigateByUrl('/listInterv'),
        error: (error) => console.log(error)
      }
    );   
  }

   
}