import { TestBed } from '@angular/core/testing';

import { Experimental2571Service } from './experimental2571.service';

describe('Experimental2571Service', () => {
  let service: Experimental2571Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2571Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
