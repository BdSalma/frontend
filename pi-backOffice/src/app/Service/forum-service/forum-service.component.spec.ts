import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumServiceComponent } from './forum-service.component';

describe('ForumServiceComponent', () => {
  let component: ForumServiceComponent;
  let fixture: ComponentFixture<ForumServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
