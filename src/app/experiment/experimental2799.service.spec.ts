import { TestBed } from '@angular/core/testing';

import { Experimental2799Service } from './experimental2799.service';

describe('Experimental2799Service', () => {
  let service: Experimental2799Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2799Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
