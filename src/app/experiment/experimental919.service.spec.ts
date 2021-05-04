import { TestBed } from '@angular/core/testing';

import { Experimental919Service } from './experimental919.service';

describe('Experimental919Service', () => {
  let service: Experimental919Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental919Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
