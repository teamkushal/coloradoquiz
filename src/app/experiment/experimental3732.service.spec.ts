import { TestBed } from '@angular/core/testing';

import { Experimental3732Service } from './experimental3732.service';

describe('Experimental3732Service', () => {
  let service: Experimental3732Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3732Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
