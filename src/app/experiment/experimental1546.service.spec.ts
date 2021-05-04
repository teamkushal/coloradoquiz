import { TestBed } from '@angular/core/testing';

import { Experimental1546Service } from './experimental1546.service';

describe('Experimental1546Service', () => {
  let service: Experimental1546Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1546Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
