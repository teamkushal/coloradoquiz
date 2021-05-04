import { TestBed } from '@angular/core/testing';

import { Experimental3538Service } from './experimental3538.service';

describe('Experimental3538Service', () => {
  let service: Experimental3538Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3538Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
