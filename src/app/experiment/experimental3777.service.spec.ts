import { TestBed } from '@angular/core/testing';

import { Experimental3777Service } from './experimental3777.service';

describe('Experimental3777Service', () => {
  let service: Experimental3777Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3777Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
