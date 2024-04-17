import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:pi-backOffice/src/app/invoices management/my-old-invoices/my-old-invoices.component.spec.ts
import { MyOldInvoicesComponent } from './my-old-invoices.component';

describe('MyOldInvoicesComponent', () => {
  let component: MyOldInvoicesComponent;
  let fixture: ComponentFixture<MyOldInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOldInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOldInvoicesComponent);
========
import { AddRequestComponent } from './add-request.component';

describe('AddRequestComponent', () => {
  let component: AddRequestComponent;
  let fixture: ComponentFixture<AddRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequestComponent);
>>>>>>>> 8e978a8c7bbbb220e9582f7f2249c9b7ca120a32:pi-backOffice/src/app/add-request/add-request.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
