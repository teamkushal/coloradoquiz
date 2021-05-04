import { TestBed } from '@angular/core/testing';

import { Experimental1217Service } from './experimental1217.service';

describe('Experimental1217Service', () => {
  let service: Experimental1217Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1217Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
