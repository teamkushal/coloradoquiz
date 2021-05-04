import { TestBed } from '@angular/core/testing';

import { Experimental3780Service } from './experimental3780.service';

describe('Experimental3780Service', () => {
  let service: Experimental3780Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3780Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
