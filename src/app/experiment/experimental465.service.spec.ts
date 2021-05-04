import { TestBed } from '@angular/core/testing';

import { Experimental465Service } from './experimental465.service';

describe('Experimental465Service', () => {
  let service: Experimental465Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental465Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
