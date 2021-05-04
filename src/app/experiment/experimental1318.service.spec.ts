import { TestBed } from '@angular/core/testing';

import { Experimental1318Service } from './experimental1318.service';

describe('Experimental1318Service', () => {
  let service: Experimental1318Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1318Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
