import { TestBed } from '@angular/core/testing';

import { Experimental27Service } from './experimental27.service';

describe('Experimental27Service', () => {
  let service: Experimental27Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental27Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
