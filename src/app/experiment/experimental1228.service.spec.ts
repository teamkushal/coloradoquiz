import { TestBed } from '@angular/core/testing';

import { Experimental1228Service } from './experimental1228.service';

describe('Experimental1228Service', () => {
  let service: Experimental1228Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1228Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
