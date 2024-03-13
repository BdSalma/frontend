import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSposorComponent } from './edit-sposor.component';

describe('EditSposorComponent', () => {
  let component: EditSposorComponent;
  let fixture: ComponentFixture<EditSposorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSposorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSposorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
