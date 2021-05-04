import { TestBed } from '@angular/core/testing';

import { Experimental3273Service } from './experimental3273.service';

describe('Experimental3273Service', () => {
  let service: Experimental3273Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3273Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
