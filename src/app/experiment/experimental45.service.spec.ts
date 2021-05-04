import { TestBed } from '@angular/core/testing';

import { Experimental45Service } from './experimental45.service';

describe('Experimental45Service', () => {
  let service: Experimental45Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental45Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
