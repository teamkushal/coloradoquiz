import { TestBed } from '@angular/core/testing';

import { Experimental2250Service } from './experimental2250.service';

describe('Experimental2250Service', () => {
  let service: Experimental2250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
