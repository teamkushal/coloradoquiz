import { TestBed } from '@angular/core/testing';

import { Experimental2495Service } from './experimental2495.service';

describe('Experimental2495Service', () => {
  let service: Experimental2495Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2495Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
