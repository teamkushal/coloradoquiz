import { TestBed } from '@angular/core/testing';

import { Experimental1471Service } from './experimental1471.service';

describe('Experimental1471Service', () => {
  let service: Experimental1471Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1471Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
