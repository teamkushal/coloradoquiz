import { TestBed } from '@angular/core/testing';

import { Experimental2960Service } from './experimental2960.service';

describe('Experimental2960Service', () => {
  let service: Experimental2960Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2960Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
