import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:pi-backOffice/src/app/ForumComponenets/add-forum/add-forum.component.spec.ts
import { AddForumComponent } from './add-forum.component';

describe('AddForumComponent', () => {
  let component: AddForumComponent;
  let fixture: ComponentFixture<AddForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddForumComponent);
========
import { EditForumComponent } from './edit-forum.component';

describe('EditForumComponent', () => {
  let component: EditForumComponent;
  let fixture: ComponentFixture<EditForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditForumComponent);
>>>>>>>> origin:pi-backOffice/src/app/ForumComponenets/edit-forum/edit-forum.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
