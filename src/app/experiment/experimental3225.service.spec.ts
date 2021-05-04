import { TestBed } from '@angular/core/testing';

import { Experimental3225Service } from './experimental3225.service';

describe('Experimental3225Service', () => {
  let service: Experimental3225Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3225Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
