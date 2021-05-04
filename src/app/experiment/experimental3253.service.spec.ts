import { TestBed } from '@angular/core/testing';

import { Experimental3253Service } from './experimental3253.service';

describe('Experimental3253Service', () => {
  let service: Experimental3253Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3253Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
