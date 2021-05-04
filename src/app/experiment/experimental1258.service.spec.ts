import { TestBed } from '@angular/core/testing';

import { Experimental1258Service } from './experimental1258.service';

describe('Experimental1258Service', () => {
  let service: Experimental1258Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1258Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
