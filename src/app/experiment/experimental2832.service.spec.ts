import { TestBed } from '@angular/core/testing';

import { Experimental2832Service } from './experimental2832.service';

describe('Experimental2832Service', () => {
  let service: Experimental2832Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2832Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
