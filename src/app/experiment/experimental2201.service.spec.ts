import { TestBed } from '@angular/core/testing';

import { Experimental2201Service } from './experimental2201.service';

describe('Experimental2201Service', () => {
  let service: Experimental2201Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2201Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
