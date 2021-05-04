import { TestBed } from '@angular/core/testing';

import { Experimental2665Service } from './experimental2665.service';

describe('Experimental2665Service', () => {
  let service: Experimental2665Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2665Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
