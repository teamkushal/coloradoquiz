import { TestBed } from '@angular/core/testing';

import { Experimental2169Service } from './experimental2169.service';

describe('Experimental2169Service', () => {
  let service: Experimental2169Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2169Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
