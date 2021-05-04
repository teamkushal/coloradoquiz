import { TestBed } from '@angular/core/testing';

import { Experimental2919Service } from './experimental2919.service';

describe('Experimental2919Service', () => {
  let service: Experimental2919Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2919Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
