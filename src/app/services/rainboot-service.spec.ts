import { TestBed } from '@angular/core/testing';

import { RainbootService } from './rainboot-service';

describe('RainbootService', () => {
  let service: RainbootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainbootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
