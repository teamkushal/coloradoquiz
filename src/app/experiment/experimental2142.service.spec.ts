import { TestBed } from '@angular/core/testing';

import { Experimental2142Service } from './experimental2142.service';

describe('Experimental2142Service', () => {
  let service: Experimental2142Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2142Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
