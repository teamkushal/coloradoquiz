import { TestBed } from '@angular/core/testing';

import { Experimental2687Service } from './experimental2687.service';

describe('Experimental2687Service', () => {
  let service: Experimental2687Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2687Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
