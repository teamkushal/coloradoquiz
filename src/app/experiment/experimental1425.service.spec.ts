import { TestBed } from '@angular/core/testing';

import { Experimental1425Service } from './experimental1425.service';

describe('Experimental1425Service', () => {
  let service: Experimental1425Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1425Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
