import { TestBed } from '@angular/core/testing';

import { Experimental1339Service } from './experimental1339.service';

describe('Experimental1339Service', () => {
  let service: Experimental1339Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1339Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
