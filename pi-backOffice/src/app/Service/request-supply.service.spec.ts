import { TestBed } from '@angular/core/testing';

import { RequestSupplyService } from './request-supply.service';

describe('RequestSupplyServiceService', () => {
  let service: RequestSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
