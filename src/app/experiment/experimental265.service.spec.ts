import { TestBed } from '@angular/core/testing';

import { Experimental265Service } from './experimental265.service';

describe('Experimental265Service', () => {
  let service: Experimental265Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental265Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
