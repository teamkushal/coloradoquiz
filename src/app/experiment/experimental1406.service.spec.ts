import { TestBed } from '@angular/core/testing';

import { Experimental1406Service } from './experimental1406.service';

describe('Experimental1406Service', () => {
  let service: Experimental1406Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1406Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
