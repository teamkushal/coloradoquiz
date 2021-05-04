import { TestBed } from '@angular/core/testing';

import { Experimental2408Service } from './experimental2408.service';

describe('Experimental2408Service', () => {
  let service: Experimental2408Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2408Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
