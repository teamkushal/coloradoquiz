import { TestBed } from '@angular/core/testing';

import { Experimental2719Service } from './experimental2719.service';

describe('Experimental2719Service', () => {
  let service: Experimental2719Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2719Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
