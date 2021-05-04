import { TestBed } from '@angular/core/testing';

import { Experimental2775Service } from './experimental2775.service';

describe('Experimental2775Service', () => {
  let service: Experimental2775Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2775Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
