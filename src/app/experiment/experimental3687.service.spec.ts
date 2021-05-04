import { TestBed } from '@angular/core/testing';

import { Experimental3687Service } from './experimental3687.service';

describe('Experimental3687Service', () => {
  let service: Experimental3687Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3687Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
