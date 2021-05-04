import { TestBed } from '@angular/core/testing';

import { Experimental2861Service } from './experimental2861.service';

describe('Experimental2861Service', () => {
  let service: Experimental2861Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2861Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
