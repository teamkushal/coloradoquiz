import { TestBed } from '@angular/core/testing';

import { Experimental1573Service } from './experimental1573.service';

describe('Experimental1573Service', () => {
  let service: Experimental1573Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1573Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
