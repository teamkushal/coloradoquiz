import { TestBed } from '@angular/core/testing';

import { Experimental1597Service } from './experimental1597.service';

describe('Experimental1597Service', () => {
  let service: Experimental1597Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1597Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
