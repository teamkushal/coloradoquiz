import { TestBed } from '@angular/core/testing';

import { Experimental1800Service } from './experimental1800.service';

describe('Experimental1800Service', () => {
  let service: Experimental1800Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1800Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
