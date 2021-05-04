import { TestBed } from '@angular/core/testing';

import { Experimental3950Service } from './experimental3950.service';

describe('Experimental3950Service', () => {
  let service: Experimental3950Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3950Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
