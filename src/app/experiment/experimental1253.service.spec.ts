import { TestBed } from '@angular/core/testing';

import { Experimental1253Service } from './experimental1253.service';

describe('Experimental1253Service', () => {
  let service: Experimental1253Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1253Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
