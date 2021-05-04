import { TestBed } from '@angular/core/testing';

import { Experimental1990Service } from './experimental1990.service';

describe('Experimental1990Service', () => {
  let service: Experimental1990Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1990Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
