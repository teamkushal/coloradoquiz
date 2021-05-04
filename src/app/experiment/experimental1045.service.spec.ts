import { TestBed } from '@angular/core/testing';

import { Experimental1045Service } from './experimental1045.service';

describe('Experimental1045Service', () => {
  let service: Experimental1045Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1045Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
