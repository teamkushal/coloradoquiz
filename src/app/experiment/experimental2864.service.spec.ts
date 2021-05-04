import { TestBed } from '@angular/core/testing';

import { Experimental2864Service } from './experimental2864.service';

describe('Experimental2864Service', () => {
  let service: Experimental2864Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2864Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
