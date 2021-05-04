import { TestBed } from '@angular/core/testing';

import { Experimental2352Service } from './experimental2352.service';

describe('Experimental2352Service', () => {
  let service: Experimental2352Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2352Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
