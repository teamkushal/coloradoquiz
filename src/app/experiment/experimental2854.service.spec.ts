import { TestBed } from '@angular/core/testing';

import { Experimental2854Service } from './experimental2854.service';

describe('Experimental2854Service', () => {
  let service: Experimental2854Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2854Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
