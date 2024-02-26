import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpIndexComponent } from './sign-up-index.component';

describe('SignUpIndexComponent', () => {
  let component: SignUpIndexComponent;
  let fixture: ComponentFixture<SignUpIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
