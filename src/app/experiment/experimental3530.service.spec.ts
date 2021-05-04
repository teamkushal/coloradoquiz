import { TestBed } from '@angular/core/testing';

import { Experimental3530Service } from './experimental3530.service';

describe('Experimental3530Service', () => {
  let service: Experimental3530Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3530Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
