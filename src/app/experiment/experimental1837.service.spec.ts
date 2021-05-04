import { TestBed } from '@angular/core/testing';

import { Experimental1837Service } from './experimental1837.service';

describe('Experimental1837Service', () => {
  let service: Experimental1837Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1837Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
