import { TestBed } from '@angular/core/testing';

import { Experimental3505Service } from './experimental3505.service';

describe('Experimental3505Service', () => {
  let service: Experimental3505Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3505Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
