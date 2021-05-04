import { TestBed } from '@angular/core/testing';

import { Experimental3456Service } from './experimental3456.service';

describe('Experimental3456Service', () => {
  let service: Experimental3456Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3456Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
