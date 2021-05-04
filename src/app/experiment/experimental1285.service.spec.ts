import { TestBed } from '@angular/core/testing';

import { Experimental1285Service } from './experimental1285.service';

describe('Experimental1285Service', () => {
  let service: Experimental1285Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1285Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
