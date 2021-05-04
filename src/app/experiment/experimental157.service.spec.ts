import { TestBed } from '@angular/core/testing';

import { Experimental157Service } from './experimental157.service';

describe('Experimental157Service', () => {
  let service: Experimental157Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental157Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
