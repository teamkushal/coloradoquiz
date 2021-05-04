import { TestBed } from '@angular/core/testing';

import { Experimental2787Service } from './experimental2787.service';

describe('Experimental2787Service', () => {
  let service: Experimental2787Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2787Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
