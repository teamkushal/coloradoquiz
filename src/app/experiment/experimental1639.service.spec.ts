import { TestBed } from '@angular/core/testing';

import { Experimental1639Service } from './experimental1639.service';

describe('Experimental1639Service', () => {
  let service: Experimental1639Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1639Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
