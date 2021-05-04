import { TestBed } from '@angular/core/testing';

import { Experimental787Service } from './experimental787.service';

describe('Experimental787Service', () => {
  let service: Experimental787Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental787Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
