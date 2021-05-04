import { TestBed } from '@angular/core/testing';

import { Experimental1724Service } from './experimental1724.service';

describe('Experimental1724Service', () => {
  let service: Experimental1724Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1724Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
