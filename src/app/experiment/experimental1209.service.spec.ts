import { TestBed } from '@angular/core/testing';

import { Experimental1209Service } from './experimental1209.service';

describe('Experimental1209Service', () => {
  let service: Experimental1209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
