import { TestBed } from '@angular/core/testing';

import { Experimental1570Service } from './experimental1570.service';

describe('Experimental1570Service', () => {
  let service: Experimental1570Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1570Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
