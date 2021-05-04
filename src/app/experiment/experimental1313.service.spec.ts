import { TestBed } from '@angular/core/testing';

import { Experimental1313Service } from './experimental1313.service';

describe('Experimental1313Service', () => {
  let service: Experimental1313Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1313Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
