import { TestBed } from '@angular/core/testing';

import { Experimental3628Service } from './experimental3628.service';

describe('Experimental3628Service', () => {
  let service: Experimental3628Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3628Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
