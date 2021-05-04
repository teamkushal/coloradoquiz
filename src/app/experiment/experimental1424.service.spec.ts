import { TestBed } from '@angular/core/testing';

import { Experimental1424Service } from './experimental1424.service';

describe('Experimental1424Service', () => {
  let service: Experimental1424Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1424Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
