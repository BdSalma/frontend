import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:pi-backOffice/src/app/invoices management/old-invoices/old-invoices.component.spec.ts
import { OldInvoicesComponent } from './old-invoices.component';

describe('OldInvoicesComponent', () => {
  let component: OldInvoicesComponent;
  let fixture: ComponentFixture<OldInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldInvoicesComponent);
========
import { UpdateDevisComponent } from './update-devis.component';

describe('UpdateDevisComponent', () => {
  let component: UpdateDevisComponent;
  let fixture: ComponentFixture<UpdateDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDevisComponent);
>>>>>>>> 8e978a8c7bbbb220e9582f7f2249c9b7ca120a32:pi-backOffice/src/app/update-devis/update-devis.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
