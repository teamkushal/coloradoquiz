import { TestBed } from '@angular/core/testing';

import { Experimental445Service } from './experimental445.service';

describe('Experimental445Service', () => {
  let service: Experimental445Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental445Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
