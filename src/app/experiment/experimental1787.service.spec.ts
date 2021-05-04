import { TestBed } from '@angular/core/testing';

import { Experimental1787Service } from './experimental1787.service';

describe('Experimental1787Service', () => {
  let service: Experimental1787Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1787Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
