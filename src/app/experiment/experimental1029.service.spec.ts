import { TestBed } from '@angular/core/testing';

import { Experimental1029Service } from './experimental1029.service';

describe('Experimental1029Service', () => {
  let service: Experimental1029Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1029Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
