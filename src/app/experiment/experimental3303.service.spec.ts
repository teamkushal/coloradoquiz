import { TestBed } from '@angular/core/testing';

import { Experimental3303Service } from './experimental3303.service';

describe('Experimental3303Service', () => {
  let service: Experimental3303Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3303Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
