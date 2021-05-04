import { TestBed } from '@angular/core/testing';

import { Experimental1612Service } from './experimental1612.service';

describe('Experimental1612Service', () => {
  let service: Experimental1612Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1612Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
