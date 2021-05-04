import { TestBed } from '@angular/core/testing';

import { Experimental1394Service } from './experimental1394.service';

describe('Experimental1394Service', () => {
  let service: Experimental1394Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1394Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
