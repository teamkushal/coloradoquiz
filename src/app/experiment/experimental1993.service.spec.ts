import { TestBed } from '@angular/core/testing';

import { Experimental1993Service } from './experimental1993.service';

describe('Experimental1993Service', () => {
  let service: Experimental1993Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1993Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
