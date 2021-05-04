import { TestBed } from '@angular/core/testing';

import { Experimental2489Service } from './experimental2489.service';

describe('Experimental2489Service', () => {
  let service: Experimental2489Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2489Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
