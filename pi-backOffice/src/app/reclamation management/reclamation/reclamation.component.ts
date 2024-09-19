import { Component } from '@angular/core';
import { Reclamation } from '../../model/reclamation';
import { User } from '../../model/user';
import { TypeReclamation } from '../../model/typeReclamation';
import { ReclamationService } from '../../service/reclamation.service';
import { Authentication } from '../../service/authentication.service';
import { SentimentalAnalysisService } from 'src/app/Service/sentimental-analysis.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
})
export class ReclamationComponent {
  constructor(
    private reclamationService: ReclamationService,
    private auth: Authentication,
    private sentimentService: SentimentalAnalysisService
  ) { }
  reclamations: Reclamation[] = [];
  reclamationType = TypeReclamation;
  users: any[] = [];
  currentUser: User | undefined;
  sentimentResult: any;
  isLoading: boolean = false;
  text!:String;
  nega!:number;
  neu!:number;
  pos!:number;

  ngOnInit(): void {
    this.reclamationService.getReclamation().subscribe((data) => {
      this.reclamations = data;
    });
    this.auth.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getReclamationTypeString(type: TypeReclamation): string {
    switch (type) {
      case TypeReclamation.Technical:
        return 'Technical';
      case TypeReclamation.Feed:
        return 'Feed-Back';
      // Add more cases if needed
      default:
        return 'Unknown';
    }
  }

  deleteReclamation(reclamation: Reclamation) {
    this.reclamationService
      .deleteReclamation(reclamation.id)
      .subscribe(
        () =>
        (this.reclamations = this.reclamations.filter(
          (rec: Reclamation) => rec != reclamation
        ))
      );
  }

  ReviewReclamation(user: User) {
    this.reclamationService
      .Review(user.id)
      .subscribe(
        () => (this.users = this.users.filter((rec: User) => rec != user))
      );
  }

  openDialog(user: User) {
    this.currentUser = user;
    const modelDiv = document.getElementById('popup');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  handleDialog(event: any) {
    this.ReviewReclamation(event);
  }

  addFavorite(reclamation: Reclamation) {
    this.reclamationService
      .addToFavorites(reclamation.id)
      .subscribe(
        () =>
        (this.reclamations = this.reclamations.filter(
          (rec: Reclamation) => rec != reclamation
        ))
      );
  }
  openDialog1() {
    const modelDiv = document.getElementById('popup1');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  analyzeSentiment(text: string) {
    this.isLoading=true;
    this.sentimentService.analyzeSentiment(text).subscribe(
      (response) => {
        this.sentimentResult = response;
        this.nega = response["roberta_neg"];
        this.neu = response["roberta_neu"];
        this.pos = response["roberta_pos"];
        this.isLoading=false;
        this.text=text;
        this.openDialog1();
      },
      
      (error) => {
        console.error('Error performing sentiment analysis:', error);
        this.isLoading=false;
      }
    );
  }
}
