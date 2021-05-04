import { TestBed } from '@angular/core/testing';

import { Experimental2686Service } from './experimental2686.service';

describe('Experimental2686Service', () => {
  let service: Experimental2686Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2686Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
