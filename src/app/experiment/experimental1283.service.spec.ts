import { TestBed } from '@angular/core/testing';

import { Experimental1283Service } from './experimental1283.service';

describe('Experimental1283Service', () => {
  let service: Experimental1283Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1283Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
