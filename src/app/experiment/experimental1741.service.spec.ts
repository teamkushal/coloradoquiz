import { TestBed } from '@angular/core/testing';

import { Experimental1741Service } from './experimental1741.service';

describe('Experimental1741Service', () => {
  let service: Experimental1741Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1741Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
