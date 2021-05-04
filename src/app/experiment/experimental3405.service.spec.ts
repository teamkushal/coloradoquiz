import { TestBed } from '@angular/core/testing';

import { Experimental3405Service } from './experimental3405.service';

describe('Experimental3405Service', () => {
  let service: Experimental3405Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3405Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
