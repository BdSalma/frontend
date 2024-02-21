import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandServiceComponent } from './stand-service.component';

describe('StandServiceComponent', () => {
  let component: StandServiceComponent;
  let fixture: ComponentFixture<StandServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
