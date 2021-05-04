import { TestBed } from '@angular/core/testing';

import { Experimental1965Service } from './experimental1965.service';

describe('Experimental1965Service', () => {
  let service: Experimental1965Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1965Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
