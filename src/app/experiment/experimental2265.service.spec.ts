import { TestBed } from '@angular/core/testing';

import { Experimental2265Service } from './experimental2265.service';

describe('Experimental2265Service', () => {
  let service: Experimental2265Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2265Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
