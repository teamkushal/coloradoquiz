import { TestBed } from '@angular/core/testing';

import { Experimental3292Service } from './experimental3292.service';

describe('Experimental3292Service', () => {
  let service: Experimental3292Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3292Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
