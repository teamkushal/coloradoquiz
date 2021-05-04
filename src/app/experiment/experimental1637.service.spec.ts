import { TestBed } from '@angular/core/testing';

import { Experimental1637Service } from './experimental1637.service';

describe('Experimental1637Service', () => {
  let service: Experimental1637Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1637Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
