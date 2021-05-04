import { TestBed } from '@angular/core/testing';

import { Experimental3750Service } from './experimental3750.service';

describe('Experimental3750Service', () => {
  let service: Experimental3750Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3750Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
