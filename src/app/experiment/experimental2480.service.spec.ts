import { TestBed } from '@angular/core/testing';

import { Experimental2480Service } from './experimental2480.service';

describe('Experimental2480Service', () => {
  let service: Experimental2480Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2480Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
