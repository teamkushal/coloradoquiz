import { TestBed } from '@angular/core/testing';

import { Experimental1710Service } from './experimental1710.service';

describe('Experimental1710Service', () => {
  let service: Experimental1710Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1710Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
