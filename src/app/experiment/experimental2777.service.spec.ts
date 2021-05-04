import { TestBed } from '@angular/core/testing';

import { Experimental2777Service } from './experimental2777.service';

describe('Experimental2777Service', () => {
  let service: Experimental2777Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2777Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
