import { TestBed } from '@angular/core/testing';

import { Experimental1975Service } from './experimental1975.service';

describe('Experimental1975Service', () => {
  let service: Experimental1975Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1975Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
