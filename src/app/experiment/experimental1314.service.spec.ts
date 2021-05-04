import { TestBed } from '@angular/core/testing';

import { Experimental1314Service } from './experimental1314.service';

describe('Experimental1314Service', () => {
  let service: Experimental1314Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1314Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
