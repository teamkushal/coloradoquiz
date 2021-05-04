import { TestBed } from '@angular/core/testing';

import { Experimental2166Service } from './experimental2166.service';

describe('Experimental2166Service', () => {
  let service: Experimental2166Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2166Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
