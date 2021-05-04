import { TestBed } from '@angular/core/testing';

import { Experimental3169Service } from './experimental3169.service';

describe('Experimental3169Service', () => {
  let service: Experimental3169Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3169Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
