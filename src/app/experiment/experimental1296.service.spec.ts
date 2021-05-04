import { TestBed } from '@angular/core/testing';

import { Experimental1296Service } from './experimental1296.service';

describe('Experimental1296Service', () => {
  let service: Experimental1296Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1296Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
