import { TestBed } from '@angular/core/testing';

import { Experimental1497Service } from './experimental1497.service';

describe('Experimental1497Service', () => {
  let service: Experimental1497Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1497Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
