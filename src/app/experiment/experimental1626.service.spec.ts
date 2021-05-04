import { TestBed } from '@angular/core/testing';

import { Experimental1626Service } from './experimental1626.service';

describe('Experimental1626Service', () => {
  let service: Experimental1626Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1626Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
