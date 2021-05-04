import { TestBed } from '@angular/core/testing';

import { Experimental3266Service } from './experimental3266.service';

describe('Experimental3266Service', () => {
  let service: Experimental3266Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3266Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
