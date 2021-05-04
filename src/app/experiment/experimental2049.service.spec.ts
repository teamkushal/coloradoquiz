import { TestBed } from '@angular/core/testing';

import { Experimental2049Service } from './experimental2049.service';

describe('Experimental2049Service', () => {
  let service: Experimental2049Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2049Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
