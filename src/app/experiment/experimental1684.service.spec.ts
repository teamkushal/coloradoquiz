import { TestBed } from '@angular/core/testing';

import { Experimental1684Service } from './experimental1684.service';

describe('Experimental1684Service', () => {
  let service: Experimental1684Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1684Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
