import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdModalComponent } from '../ad-modal/ad-modal.component';

import { ChatbotDialogComponent } from './chatbot-dialog.component';

describe('ChatbotDialogComponent', () => {
  let component: ChatbotDialogComponent;
  let fixture: ComponentFixture<ChatbotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
