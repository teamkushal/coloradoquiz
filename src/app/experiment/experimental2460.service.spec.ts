import { TestBed } from '@angular/core/testing';

import { Experimental2460Service } from './experimental2460.service';

describe('Experimental2460Service', () => {
  let service: Experimental2460Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2460Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
