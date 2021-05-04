import { TestBed } from '@angular/core/testing';

import { Experimental1863Service } from './experimental1863.service';

describe('Experimental1863Service', () => {
  let service: Experimental1863Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1863Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
