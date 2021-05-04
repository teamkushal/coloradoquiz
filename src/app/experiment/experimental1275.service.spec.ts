import { TestBed } from '@angular/core/testing';

import { Experimental1275Service } from './experimental1275.service';

describe('Experimental1275Service', () => {
  let service: Experimental1275Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1275Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
