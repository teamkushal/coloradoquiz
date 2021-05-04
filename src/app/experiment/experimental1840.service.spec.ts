import { TestBed } from '@angular/core/testing';

import { Experimental1840Service } from './experimental1840.service';

describe('Experimental1840Service', () => {
  let service: Experimental1840Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1840Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
