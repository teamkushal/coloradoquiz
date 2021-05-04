import { TestBed } from '@angular/core/testing';

import { Experimental3208Service } from './experimental3208.service';

describe('Experimental3208Service', () => {
  let service: Experimental3208Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3208Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
