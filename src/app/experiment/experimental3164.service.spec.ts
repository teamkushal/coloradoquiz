import { TestBed } from '@angular/core/testing';

import { Experimental3164Service } from './experimental3164.service';

describe('Experimental3164Service', () => {
  let service: Experimental3164Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3164Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
