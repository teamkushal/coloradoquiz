import { TestBed } from '@angular/core/testing';

import { Experimental2157Service } from './experimental2157.service';

describe('Experimental2157Service', () => {
  let service: Experimental2157Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2157Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
