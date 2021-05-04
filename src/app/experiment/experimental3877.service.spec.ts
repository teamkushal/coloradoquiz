import { TestBed } from '@angular/core/testing';

import { Experimental3877Service } from './experimental3877.service';

describe('Experimental3877Service', () => {
  let service: Experimental3877Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3877Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
