import { TestBed } from '@angular/core/testing';

import { Experimental3919Service } from './experimental3919.service';

describe('Experimental3919Service', () => {
  let service: Experimental3919Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3919Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
