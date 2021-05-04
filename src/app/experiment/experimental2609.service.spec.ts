import { TestBed } from '@angular/core/testing';

import { Experimental2609Service } from './experimental2609.service';

describe('Experimental2609Service', () => {
  let service: Experimental2609Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2609Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
