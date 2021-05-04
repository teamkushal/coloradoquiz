import { TestBed } from '@angular/core/testing';

import { Experimental2968Service } from './experimental2968.service';

describe('Experimental2968Service', () => {
  let service: Experimental2968Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2968Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
