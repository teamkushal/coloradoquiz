import { TestBed } from '@angular/core/testing';

import { Experimental2081Service } from './experimental2081.service';

describe('Experimental2081Service', () => {
  let service: Experimental2081Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2081Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
