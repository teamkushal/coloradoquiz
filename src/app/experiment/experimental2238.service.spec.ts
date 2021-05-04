import { TestBed } from '@angular/core/testing';

import { Experimental2238Service } from './experimental2238.service';

describe('Experimental2238Service', () => {
  let service: Experimental2238Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2238Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
