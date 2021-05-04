import { TestBed } from '@angular/core/testing';

import { Experimental1803Service } from './experimental1803.service';

describe('Experimental1803Service', () => {
  let service: Experimental1803Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1803Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
