import { TestBed } from '@angular/core/testing';

import { Experimental2898Service } from './experimental2898.service';

describe('Experimental2898Service', () => {
  let service: Experimental2898Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2898Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
