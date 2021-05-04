import { TestBed } from '@angular/core/testing';

import { Experimental1719Service } from './experimental1719.service';

describe('Experimental1719Service', () => {
  let service: Experimental1719Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1719Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
