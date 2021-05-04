import { TestBed } from '@angular/core/testing';

import { Experimental665Service } from './experimental665.service';

describe('Experimental665Service', () => {
  let service: Experimental665Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental665Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
