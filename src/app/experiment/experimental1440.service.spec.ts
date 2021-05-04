import { TestBed } from '@angular/core/testing';

import { Experimental1440Service } from './experimental1440.service';

describe('Experimental1440Service', () => {
  let service: Experimental1440Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1440Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
