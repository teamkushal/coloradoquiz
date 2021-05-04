import { TestBed } from '@angular/core/testing';

import { Experimental2468Service } from './experimental2468.service';

describe('Experimental2468Service', () => {
  let service: Experimental2468Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2468Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
