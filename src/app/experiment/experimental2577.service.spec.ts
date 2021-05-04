import { TestBed } from '@angular/core/testing';

import { Experimental2577Service } from './experimental2577.service';

describe('Experimental2577Service', () => {
  let service: Experimental2577Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2577Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
