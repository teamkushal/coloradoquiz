import { TestBed } from '@angular/core/testing';

import { Experimental3700Service } from './experimental3700.service';

describe('Experimental3700Service', () => {
  let service: Experimental3700Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3700Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
