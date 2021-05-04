import { TestBed } from '@angular/core/testing';

import { Experimental1680Service } from './experimental1680.service';

describe('Experimental1680Service', () => {
  let service: Experimental1680Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1680Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
