import { TestBed } from '@angular/core/testing';

import { Experimental1408Service } from './experimental1408.service';

describe('Experimental1408Service', () => {
  let service: Experimental1408Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1408Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
