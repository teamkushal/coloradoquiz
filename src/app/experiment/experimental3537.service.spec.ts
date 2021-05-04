import { TestBed } from '@angular/core/testing';

import { Experimental3537Service } from './experimental3537.service';

describe('Experimental3537Service', () => {
  let service: Experimental3537Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3537Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
