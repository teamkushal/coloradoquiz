import { TestBed } from '@angular/core/testing';

import { Experimental2236Service } from './experimental2236.service';

describe('Experimental2236Service', () => {
  let service: Experimental2236Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2236Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
