import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureService } from '../service/candidature.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../model/room';
import { Interview } from '../model/interview';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user-service.service';
declare var createGoogleEvent: any;
@Component({
  selector: 'app-detail-candidat',
  templateUrl: './detail-candidat.component.html',
  styleUrls: ['./detail-candidat.component.css']
})
export class DetailCandidatComponent {
  id!:number;
  candidat!:any;
  //test
  offerDates: Date[] = [];
  candidatArray: Date[] = []; // Initialiser avec un tableau vide
  selectedDate: Date | undefined;
  registerForm!: FormGroup;
  rooms: Room[] = [];
  calendarConfig = {}; 
  isOnline: boolean = false;
  isInRoom: boolean = false;
  interviewData: Interview | null = null;
  constructor(private route: ActivatedRoute,private service:CandidatureService,private fb: FormBuilder,private authService: UserService,
    private http: HttpClient,
    private router: Router,
    private candidatureService: CandidatureService){
    this.id=this.route.snapshot.params['id'];
    }
    ngOnInit(){
      this.service.getById(this.id).subscribe({
        next: (data) => {
          this.candidat = data;

          // Assuming candidat.offre contains the Offer object
          if (this.candidat && this.candidat.offer) {
            // Initialiser candidatArray avec les trois dates de l'offre
            this.candidatArray = [this.candidat.offer.date1, this.candidat.offer.date2, this.candidat.offer.date3];
        }
        }
      });
      //test
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
      this.candidatureService.getInterview().subscribe( );
    }
    reset() {
      this.registerForm.reset();
    }
    onSelectDate(date: Date) {
      this.selectedDate = date;
      if (this.interviewData && this.interviewData.date) {
        // You can now use interviewData.date (assuming it's a LocalDateTime object)
        const newDate = this.interviewData.date; // Assuming you want to add 30 minutes
        console.log(newDate);
      } else {
        console.warn('Interview date not available');
      }
    }
    
    
    Annuler() {
      this.router.navigate(['/listInterv']);
    }
  
    onSubmit() {
      console.log(this.registerForm.value);
     
    }
    Ajouter() {
      console.log('Data to be sent:', this.registerForm.value);
    
      const intervData = {
        idInterview: this.id,
        interviewType: this.registerForm.value.interviewType,
        date: this.registerForm.get('date')?.value,
      };
    
      const url = `http://localhost:8087/interview/ajouterI/${this.id}`;
      
      this.candidatureService.addInterview(url, intervData).subscribe(
        {
          next: () => this.router.navigateByUrl('/listCandidat'),
          error: (error) => console.log(error)
        }
      );
    }
    Add() {
      console.log('Data to be sent:', this.registerForm.value);
    
      const interviewD = {
        idInterview: this.id,
        interviewType: this.registerForm.value.interviewType,
        date: this.registerForm.get('date')?.value,
        lien: this.registerForm.value.lien,
        titre :this.registerForm.value.titre
      };
    
      const roomNum = this.registerForm.value.room;
      const url = `http://localhost:8087/interview/addI/${this.id}?room=${roomNum}`;
      
      this.candidatureService.addInterview(url, interviewD).subscribe(
        {
          next: () => this.router.navigateByUrl('/listCandidat'),
          error: (error) => console.log(error)
        }
      );
    }
    Add1(){
      console.log('Data to be sent:', this.registerForm.value);
    
      const interviewData = {
        idInterview: this.id,
        interviewType: this.registerForm.value.interviewType,
        date: this.registerForm.get('date')?.value,
        titre :this.registerForm.value.titre,
        
      };
    
      const url = `http://localhost:8087/interview/addIEnligne/${this.id}`;
      
      this.candidatureService.addInterview(url, interviewData).subscribe( (response) =>
        {
          console.log('Interview ajoutée avec succès:', response);
           this.router.navigateByUrl('/listCandidat');
        },
         (error) => console.log('Erreur lors de l\'ajout de l\'interview:',error)
       
      );   
    }
//api google calender 
// Function to handle the button click event to schedule a meeting.
scheduleMeeting() {
  console.log(this.registerForm.value);
  let date = new Date(this.registerForm.value.date);
  // Convert the date to the desired format with a custom offset (e.g., -07:00)
  const startTime = date.toISOString().slice(0, 18) ;
  const endTime = this.getEndTime(date);
  const eventDetails = {
    email: this.candidat.individu.email,
    startTime: startTime,
    endTime: endTime,
  };
  console.info(eventDetails);
  //this.generateICSFile()
  createGoogleEvent(eventDetails);
}

getEndTime(appointmentTime: Date) {
  // Add one hour to the date
  appointmentTime.setHours(appointmentTime.getHours() + 1);
  const endTime = appointmentTime.toISOString().slice(0, 18) ;
  return endTime;
}  
}
