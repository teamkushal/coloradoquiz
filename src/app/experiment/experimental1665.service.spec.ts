import { TestBed } from '@angular/core/testing';

import { Experimental1665Service } from './experimental1665.service';

describe('Experimental1665Service', () => {
  let service: Experimental1665Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1665Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
