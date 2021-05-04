import { TestBed } from '@angular/core/testing';

import { Experimental1247Service } from './experimental1247.service';

describe('Experimental1247Service', () => {
  let service: Experimental1247Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1247Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
