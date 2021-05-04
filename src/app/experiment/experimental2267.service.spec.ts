import { TestBed } from '@angular/core/testing';

import { Experimental2267Service } from './experimental2267.service';

describe('Experimental2267Service', () => {
  let service: Experimental2267Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2267Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
