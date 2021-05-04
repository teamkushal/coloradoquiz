import { TestBed } from '@angular/core/testing';

import { Experimental1224Service } from './experimental1224.service';

describe('Experimental1224Service', () => {
  let service: Experimental1224Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1224Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
