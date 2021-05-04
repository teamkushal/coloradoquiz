import { TestBed } from '@angular/core/testing';

import { Experimental3424Service } from './experimental3424.service';

describe('Experimental3424Service', () => {
  let service: Experimental3424Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3424Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
