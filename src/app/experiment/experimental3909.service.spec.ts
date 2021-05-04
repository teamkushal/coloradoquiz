import { TestBed } from '@angular/core/testing';

import { Experimental3909Service } from './experimental3909.service';

describe('Experimental3909Service', () => {
  let service: Experimental3909Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3909Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
