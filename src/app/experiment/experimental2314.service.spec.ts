import { TestBed } from '@angular/core/testing';

import { Experimental2314Service } from './experimental2314.service';

describe('Experimental2314Service', () => {
  let service: Experimental2314Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2314Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
