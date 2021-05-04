import { TestBed } from '@angular/core/testing';

import { Experimental3217Service } from './experimental3217.service';

describe('Experimental3217Service', () => {
  let service: Experimental3217Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3217Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
