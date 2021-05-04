import { TestBed } from '@angular/core/testing';

import { Experimental1273Service } from './experimental1273.service';

describe('Experimental1273Service', () => {
  let service: Experimental1273Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1273Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
