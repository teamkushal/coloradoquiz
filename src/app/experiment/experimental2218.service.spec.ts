import { TestBed } from '@angular/core/testing';

import { Experimental2218Service } from './experimental2218.service';

describe('Experimental2218Service', () => {
  let service: Experimental2218Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2218Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
