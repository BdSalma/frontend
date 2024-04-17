import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:pi-backOffice/src/app/requests management/old-requests/old-requests.component.spec.ts
import { OldRequestsComponent } from './old-requests.component';

describe('OldRequestsComponent', () => {
  let component: OldRequestsComponent;
  let fixture: ComponentFixture<OldRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldRequestsComponent);
========
import { AddDevisComponent } from './add-devis.component';

describe('AddDevisComponent', () => {
  let component: AddDevisComponent;
  let fixture: ComponentFixture<AddDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDevisComponent);
>>>>>>>> 8e978a8c7bbbb220e9582f7f2249c9b7ca120a32:pi-backOffice/src/app/add-devis/add-devis.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
