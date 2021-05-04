import { TestBed } from '@angular/core/testing';

import { Experimental1919Service } from './experimental1919.service';

describe('Experimental1919Service', () => {
  let service: Experimental1919Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1919Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
