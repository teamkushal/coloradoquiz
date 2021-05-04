import { TestBed } from '@angular/core/testing';

import { Experimental1995Service } from './experimental1995.service';

describe('Experimental1995Service', () => {
  let service: Experimental1995Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1995Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
