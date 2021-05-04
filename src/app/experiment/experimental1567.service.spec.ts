import { TestBed } from '@angular/core/testing';

import { Experimental1567Service } from './experimental1567.service';

describe('Experimental1567Service', () => {
  let service: Experimental1567Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1567Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
