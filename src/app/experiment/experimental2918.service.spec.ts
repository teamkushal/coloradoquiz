import { TestBed } from '@angular/core/testing';

import { Experimental2918Service } from './experimental2918.service';

describe('Experimental2918Service', () => {
  let service: Experimental2918Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2918Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
