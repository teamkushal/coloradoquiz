import { TestBed } from '@angular/core/testing';

import { Experimental3533Service } from './experimental3533.service';

describe('Experimental3533Service', () => {
  let service: Experimental3533Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3533Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
