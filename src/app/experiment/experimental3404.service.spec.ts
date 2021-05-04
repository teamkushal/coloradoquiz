import { TestBed } from '@angular/core/testing';

import { Experimental3404Service } from './experimental3404.service';

describe('Experimental3404Service', () => {
  let service: Experimental3404Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3404Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
