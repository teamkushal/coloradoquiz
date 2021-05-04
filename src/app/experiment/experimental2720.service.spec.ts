import { TestBed } from '@angular/core/testing';

import { Experimental2720Service } from './experimental2720.service';

describe('Experimental2720Service', () => {
  let service: Experimental2720Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2720Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
