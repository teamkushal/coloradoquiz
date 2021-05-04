import { TestBed } from '@angular/core/testing';

import { Experimental702Service } from './experimental702.service';

describe('Experimental702Service', () => {
  let service: Experimental702Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental702Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
