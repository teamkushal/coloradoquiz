import { TestBed } from '@angular/core/testing';

import { Experimental2636Service } from './experimental2636.service';

describe('Experimental2636Service', () => {
  let service: Experimental2636Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2636Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
