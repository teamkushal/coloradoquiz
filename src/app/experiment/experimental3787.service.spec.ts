import { TestBed } from '@angular/core/testing';

import { Experimental3787Service } from './experimental3787.service';

describe('Experimental3787Service', () => {
  let service: Experimental3787Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3787Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
