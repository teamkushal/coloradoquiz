import { TestBed } from '@angular/core/testing';

import { Experimental2903Service } from './experimental2903.service';

describe('Experimental2903Service', () => {
  let service: Experimental2903Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2903Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
