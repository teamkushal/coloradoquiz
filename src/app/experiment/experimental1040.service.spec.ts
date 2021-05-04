import { TestBed } from '@angular/core/testing';

import { Experimental1040Service } from './experimental1040.service';

describe('Experimental1040Service', () => {
  let service: Experimental1040Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1040Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
