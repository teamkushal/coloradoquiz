import { TestBed } from '@angular/core/testing';

import { Experimental1333Service } from './experimental1333.service';

describe('Experimental1333Service', () => {
  let service: Experimental1333Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1333Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
