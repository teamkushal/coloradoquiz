import { TestBed } from '@angular/core/testing';

import { Experimental1137Service } from './experimental1137.service';

describe('Experimental1137Service', () => {
  let service: Experimental1137Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1137Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
