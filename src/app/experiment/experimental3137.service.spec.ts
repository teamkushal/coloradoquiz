import { TestBed } from '@angular/core/testing';

import { Experimental3137Service } from './experimental3137.service';

describe('Experimental3137Service', () => {
  let service: Experimental3137Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3137Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
