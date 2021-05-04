import { TestBed } from '@angular/core/testing';

import { Experimental1552Service } from './experimental1552.service';

describe('Experimental1552Service', () => {
  let service: Experimental1552Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1552Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
