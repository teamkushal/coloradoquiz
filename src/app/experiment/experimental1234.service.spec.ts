import { TestBed } from '@angular/core/testing';

import { Experimental1234Service } from './experimental1234.service';

describe('Experimental1234Service', () => {
  let service: Experimental1234Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1234Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
