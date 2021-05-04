import { TestBed } from '@angular/core/testing';

import { Experimental2422Service } from './experimental2422.service';

describe('Experimental2422Service', () => {
  let service: Experimental2422Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2422Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
