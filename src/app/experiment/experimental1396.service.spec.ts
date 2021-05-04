import { TestBed } from '@angular/core/testing';

import { Experimental1396Service } from './experimental1396.service';

describe('Experimental1396Service', () => {
  let service: Experimental1396Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1396Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
