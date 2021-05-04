import { TestBed } from '@angular/core/testing';

import { Experimental2418Service } from './experimental2418.service';

describe('Experimental2418Service', () => {
  let service: Experimental2418Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2418Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
