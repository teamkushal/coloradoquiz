import { TestBed } from '@angular/core/testing';

import { Experimental2475Service } from './experimental2475.service';

describe('Experimental2475Service', () => {
  let service: Experimental2475Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2475Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
