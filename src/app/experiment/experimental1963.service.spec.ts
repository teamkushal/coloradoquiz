import { TestBed } from '@angular/core/testing';

import { Experimental1963Service } from './experimental1963.service';

describe('Experimental1963Service', () => {
  let service: Experimental1963Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1963Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
