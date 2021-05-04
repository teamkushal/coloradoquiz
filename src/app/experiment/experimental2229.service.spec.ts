import { TestBed } from '@angular/core/testing';

import { Experimental2229Service } from './experimental2229.service';

describe('Experimental2229Service', () => {
  let service: Experimental2229Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2229Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
