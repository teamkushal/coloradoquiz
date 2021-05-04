import { TestBed } from '@angular/core/testing';

import { Experimental2718Service } from './experimental2718.service';

describe('Experimental2718Service', () => {
  let service: Experimental2718Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2718Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
