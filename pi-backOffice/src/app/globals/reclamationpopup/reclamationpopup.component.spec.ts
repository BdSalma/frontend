import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationpopupComponent } from './reclamationpopup.component';

describe('ReclamationpopupComponent', () => {
  let component: ReclamationpopupComponent;
  let fixture: ComponentFixture<ReclamationpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
