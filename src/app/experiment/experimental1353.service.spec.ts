import { TestBed } from '@angular/core/testing';

import { Experimental1353Service } from './experimental1353.service';

describe('Experimental1353Service', () => {
  let service: Experimental1353Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1353Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
