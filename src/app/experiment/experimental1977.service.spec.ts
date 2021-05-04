import { TestBed } from '@angular/core/testing';

import { Experimental1977Service } from './experimental1977.service';

describe('Experimental1977Service', () => {
  let service: Experimental1977Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1977Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
