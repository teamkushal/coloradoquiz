import { TestBed } from '@angular/core/testing';

import { Experimental1832Service } from './experimental1832.service';

describe('Experimental1832Service', () => {
  let service: Experimental1832Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1832Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
