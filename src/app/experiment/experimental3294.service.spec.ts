import { TestBed } from '@angular/core/testing';

import { Experimental3294Service } from './experimental3294.service';

describe('Experimental3294Service', () => {
  let service: Experimental3294Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3294Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
