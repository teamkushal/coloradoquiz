import { TestBed } from '@angular/core/testing';

import { Experimental1484Service } from './experimental1484.service';

describe('Experimental1484Service', () => {
  let service: Experimental1484Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1484Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
