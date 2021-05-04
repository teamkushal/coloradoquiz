import { TestBed } from '@angular/core/testing';

import { Experimental1456Service } from './experimental1456.service';

describe('Experimental1456Service', () => {
  let service: Experimental1456Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1456Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
