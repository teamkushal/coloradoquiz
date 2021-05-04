import { TestBed } from '@angular/core/testing';

import { Experimental103Service } from './experimental103.service';

describe('Experimental103Service', () => {
  let service: Experimental103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
