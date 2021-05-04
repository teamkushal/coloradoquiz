import { TestBed } from '@angular/core/testing';

import { Experimental2014Service } from './experimental2014.service';

describe('Experimental2014Service', () => {
  let service: Experimental2014Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2014Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
