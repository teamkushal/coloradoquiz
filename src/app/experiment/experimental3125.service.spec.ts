import { TestBed } from '@angular/core/testing';

import { Experimental3125Service } from './experimental3125.service';

describe('Experimental3125Service', () => {
  let service: Experimental3125Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3125Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
