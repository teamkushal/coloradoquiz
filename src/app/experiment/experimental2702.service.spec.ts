import { TestBed } from '@angular/core/testing';

import { Experimental2702Service } from './experimental2702.service';

describe('Experimental2702Service', () => {
  let service: Experimental2702Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2702Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
