import { TestBed } from '@angular/core/testing';

import { Experimental1037Service } from './experimental1037.service';

describe('Experimental1037Service', () => {
  let service: Experimental1037Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1037Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
