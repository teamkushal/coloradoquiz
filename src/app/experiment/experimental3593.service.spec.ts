import { TestBed } from '@angular/core/testing';

import { Experimental3593Service } from './experimental3593.service';

describe('Experimental3593Service', () => {
  let service: Experimental3593Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3593Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
