import { TestBed } from '@angular/core/testing';

import { Experimental1473Service } from './experimental1473.service';

describe('Experimental1473Service', () => {
  let service: Experimental1473Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1473Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
