import { TestBed } from '@angular/core/testing';

import { Experimental2390Service } from './experimental2390.service';

describe('Experimental2390Service', () => {
  let service: Experimental2390Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2390Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
