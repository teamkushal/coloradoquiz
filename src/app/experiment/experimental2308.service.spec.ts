import { TestBed } from '@angular/core/testing';

import { Experimental2308Service } from './experimental2308.service';

describe('Experimental2308Service', () => {
  let service: Experimental2308Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2308Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
