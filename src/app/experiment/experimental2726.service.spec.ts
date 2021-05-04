import { TestBed } from '@angular/core/testing';

import { Experimental2726Service } from './experimental2726.service';

describe('Experimental2726Service', () => {
  let service: Experimental2726Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2726Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
