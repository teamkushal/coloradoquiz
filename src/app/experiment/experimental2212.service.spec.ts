import { TestBed } from '@angular/core/testing';

import { Experimental2212Service } from './experimental2212.service';

describe('Experimental2212Service', () => {
  let service: Experimental2212Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2212Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
