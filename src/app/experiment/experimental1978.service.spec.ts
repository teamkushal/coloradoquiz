import { TestBed } from '@angular/core/testing';

import { Experimental1978Service } from './experimental1978.service';

describe('Experimental1978Service', () => {
  let service: Experimental1978Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1978Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
