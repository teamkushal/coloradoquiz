import { TestBed } from '@angular/core/testing';

import { Experimental1988Service } from './experimental1988.service';

describe('Experimental1988Service', () => {
  let service: Experimental1988Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1988Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
