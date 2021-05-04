import { TestBed } from '@angular/core/testing';

import { Experimental1122Service } from './experimental1122.service';

describe('Experimental1122Service', () => {
  let service: Experimental1122Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1122Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
