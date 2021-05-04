import { TestBed } from '@angular/core/testing';

import { Experimental1704Service } from './experimental1704.service';

describe('Experimental1704Service', () => {
  let service: Experimental1704Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1704Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
