import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDataMiningComponent } from './pack-data-mining.component';

describe('PackDataMiningComponent', () => {
  let component: PackDataMiningComponent;
  let fixture: ComponentFixture<PackDataMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackDataMiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackDataMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
