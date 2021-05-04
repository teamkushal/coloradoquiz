import { TestBed } from '@angular/core/testing';

import { Experimental3592Service } from './experimental3592.service';

describe('Experimental3592Service', () => {
  let service: Experimental3592Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3592Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
