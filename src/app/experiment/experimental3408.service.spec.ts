import { TestBed } from '@angular/core/testing';

import { Experimental3408Service } from './experimental3408.service';

describe('Experimental3408Service', () => {
  let service: Experimental3408Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3408Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
