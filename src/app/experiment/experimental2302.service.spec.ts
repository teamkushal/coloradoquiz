import { TestBed } from '@angular/core/testing';

import { Experimental2302Service } from './experimental2302.service';

describe('Experimental2302Service', () => {
  let service: Experimental2302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2302Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
