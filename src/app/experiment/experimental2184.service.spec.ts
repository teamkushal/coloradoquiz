import { TestBed } from '@angular/core/testing';

import { Experimental2184Service } from './experimental2184.service';

describe('Experimental2184Service', () => {
  let service: Experimental2184Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2184Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
