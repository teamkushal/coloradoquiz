import { TestBed } from '@angular/core/testing';

import { Experimental2110Service } from './experimental2110.service';

describe('Experimental2110Service', () => {
  let service: Experimental2110Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2110Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
