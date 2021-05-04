import { TestBed } from '@angular/core/testing';

import { Experimental444Service } from './experimental444.service';

describe('Experimental444Service', () => {
  let service: Experimental444Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental444Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
