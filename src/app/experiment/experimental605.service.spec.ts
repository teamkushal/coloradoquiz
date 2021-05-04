import { TestBed } from '@angular/core/testing';

import { Experimental605Service } from './experimental605.service';

describe('Experimental605Service', () => {
  let service: Experimental605Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental605Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
