import { TestBed } from '@angular/core/testing';

import { Experimental3597Service } from './experimental3597.service';

describe('Experimental3597Service', () => {
  let service: Experimental3597Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3597Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
