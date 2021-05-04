import { TestBed } from '@angular/core/testing';

import { Experimental2388Service } from './experimental2388.service';

describe('Experimental2388Service', () => {
  let service: Experimental2388Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2388Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
