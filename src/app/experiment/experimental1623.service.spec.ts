import { TestBed } from '@angular/core/testing';

import { Experimental1623Service } from './experimental1623.service';

describe('Experimental1623Service', () => {
  let service: Experimental1623Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1623Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
