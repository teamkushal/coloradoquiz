import { TestBed } from '@angular/core/testing';

import { Experimental1304Service } from './experimental1304.service';

describe('Experimental1304Service', () => {
  let service: Experimental1304Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1304Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
