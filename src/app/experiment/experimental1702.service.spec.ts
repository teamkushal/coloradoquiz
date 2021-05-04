import { TestBed } from '@angular/core/testing';

import { Experimental1702Service } from './experimental1702.service';

describe('Experimental1702Service', () => {
  let service: Experimental1702Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1702Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
