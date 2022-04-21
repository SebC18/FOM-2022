import { TestBed } from '@angular/core/testing';

import { KaleidosServiceService } from './kaleidos-service.service';

describe('KaleidosServiceService', () => {
  let service: KaleidosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaleidosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
