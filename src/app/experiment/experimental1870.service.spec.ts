import { TestBed } from '@angular/core/testing';

import { Experimental1870Service } from './experimental1870.service';

describe('Experimental1870Service', () => {
  let service: Experimental1870Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1870Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
