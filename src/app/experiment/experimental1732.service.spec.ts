import { TestBed } from '@angular/core/testing';

import { Experimental1732Service } from './experimental1732.service';

describe('Experimental1732Service', () => {
  let service: Experimental1732Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1732Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
