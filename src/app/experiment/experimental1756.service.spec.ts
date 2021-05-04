import { TestBed } from '@angular/core/testing';

import { Experimental1756Service } from './experimental1756.service';

describe('Experimental1756Service', () => {
  let service: Experimental1756Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1756Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
