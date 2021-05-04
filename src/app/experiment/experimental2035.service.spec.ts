import { TestBed } from '@angular/core/testing';

import { Experimental2035Service } from './experimental2035.service';

describe('Experimental2035Service', () => {
  let service: Experimental2035Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2035Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
