import { TestBed } from '@angular/core/testing';

import { Experimental781Service } from './experimental781.service';

describe('Experimental781Service', () => {
  let service: Experimental781Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental781Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
