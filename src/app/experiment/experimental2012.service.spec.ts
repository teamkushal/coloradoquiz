import { TestBed } from '@angular/core/testing';

import { Experimental2012Service } from './experimental2012.service';

describe('Experimental2012Service', () => {
  let service: Experimental2012Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2012Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
