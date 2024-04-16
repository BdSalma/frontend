import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD:pi-backOffice/src/app/service/forum-service.service.spec.ts
import { ForumServiceService } from './forum-service.service';


describe('ForumServiceService', () => {
  let service: ForumServiceService;
=======

import { Authentication } from './authentication.service';

describe('Authentication', () => {
  let service: Authentication;
>>>>>>> origin:pi-backOffice/src/app/service/authentication.service.spec.ts

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
