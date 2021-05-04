import { TestBed } from '@angular/core/testing';

import { Experimental1004Service } from './experimental1004.service';

describe('Experimental1004Service', () => {
  let service: Experimental1004Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1004Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
