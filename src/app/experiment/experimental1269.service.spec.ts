import { TestBed } from '@angular/core/testing';

import { Experimental1269Service } from './experimental1269.service';

describe('Experimental1269Service', () => {
  let service: Experimental1269Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1269Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
