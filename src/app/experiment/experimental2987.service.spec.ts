import { TestBed } from '@angular/core/testing';

import { Experimental2987Service } from './experimental2987.service';

describe('Experimental2987Service', () => {
  let service: Experimental2987Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2987Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
