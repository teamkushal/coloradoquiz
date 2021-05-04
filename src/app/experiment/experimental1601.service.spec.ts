import { TestBed } from '@angular/core/testing';

import { Experimental1601Service } from './experimental1601.service';

describe('Experimental1601Service', () => {
  let service: Experimental1601Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1601Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
