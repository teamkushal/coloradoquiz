import { TestBed } from '@angular/core/testing';

import { Experimental3141Service } from './experimental3141.service';

describe('Experimental3141Service', () => {
  let service: Experimental3141Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3141Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
