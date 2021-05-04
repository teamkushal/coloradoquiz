import { TestBed } from '@angular/core/testing';

import { Experimental2122Service } from './experimental2122.service';

describe('Experimental2122Service', () => {
  let service: Experimental2122Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2122Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
