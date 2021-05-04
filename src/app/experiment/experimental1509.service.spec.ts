import { TestBed } from '@angular/core/testing';

import { Experimental1509Service } from './experimental1509.service';

describe('Experimental1509Service', () => {
  let service: Experimental1509Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1509Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
