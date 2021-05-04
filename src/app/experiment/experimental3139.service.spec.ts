import { TestBed } from '@angular/core/testing';

import { Experimental3139Service } from './experimental3139.service';

describe('Experimental3139Service', () => {
  let service: Experimental3139Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3139Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
