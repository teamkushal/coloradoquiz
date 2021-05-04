import { TestBed } from '@angular/core/testing';

import { Experimental2132Service } from './experimental2132.service';

describe('Experimental2132Service', () => {
  let service: Experimental2132Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2132Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
