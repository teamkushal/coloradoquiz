import { TestBed } from '@angular/core/testing';

import { Experimental1437Service } from './experimental1437.service';

describe('Experimental1437Service', () => {
  let service: Experimental1437Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1437Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
