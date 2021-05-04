import { TestBed } from '@angular/core/testing';

import { Experimental2625Service } from './experimental2625.service';

describe('Experimental2625Service', () => {
  let service: Experimental2625Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2625Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
