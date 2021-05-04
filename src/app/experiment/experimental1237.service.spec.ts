import { TestBed } from '@angular/core/testing';

import { Experimental1237Service } from './experimental1237.service';

describe('Experimental1237Service', () => {
  let service: Experimental1237Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1237Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
