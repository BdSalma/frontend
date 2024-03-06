import { Component } from '@angular/core';
import { ChatbotDialogComponent } from '../chatbot-dialog/chatbot-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor( public dialog: MatDialog) {}
 

  openChatbotDialog(): void {
    // Ouverture du dialogue du chatbot
    this.dialog.open(ChatbotDialogComponent, {
      width: '250px',
      // Autres configurations si nÃ©cessaire
    });
  }

}
