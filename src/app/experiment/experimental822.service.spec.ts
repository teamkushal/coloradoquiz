import { TestBed } from '@angular/core/testing';

import { Experimental822Service } from './experimental822.service';

describe('Experimental822Service', () => {
  let service: Experimental822Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental822Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
