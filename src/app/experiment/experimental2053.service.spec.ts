import { TestBed } from '@angular/core/testing';

import { Experimental2053Service } from './experimental2053.service';

describe('Experimental2053Service', () => {
  let service: Experimental2053Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2053Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
