import { TestBed } from '@angular/core/testing';

import { Experimental948Service } from './experimental948.service';

describe('Experimental948Service', () => {
  let service: Experimental948Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental948Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
