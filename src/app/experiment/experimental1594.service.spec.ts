import { TestBed } from '@angular/core/testing';

import { Experimental1594Service } from './experimental1594.service';

describe('Experimental1594Service', () => {
  let service: Experimental1594Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1594Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
