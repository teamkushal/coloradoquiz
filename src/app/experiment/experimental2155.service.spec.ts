import { TestBed } from '@angular/core/testing';

import { Experimental2155Service } from './experimental2155.service';

describe('Experimental2155Service', () => {
  let service: Experimental2155Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2155Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
