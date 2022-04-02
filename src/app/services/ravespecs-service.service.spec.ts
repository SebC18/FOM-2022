import { TestBed } from '@angular/core/testing';

import { RavespecsServiceService } from './ravespecs-service.service';

describe('RavespecsServiceService', () => {
  let service: RavespecsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RavespecsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
