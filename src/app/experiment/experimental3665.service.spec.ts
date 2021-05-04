import { TestBed } from '@angular/core/testing';

import { Experimental3665Service } from './experimental3665.service';

describe('Experimental3665Service', () => {
  let service: Experimental3665Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3665Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
