import { TestBed } from '@angular/core/testing';

import { Experimental1139Service } from './experimental1139.service';

describe('Experimental1139Service', () => {
  let service: Experimental1139Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1139Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
