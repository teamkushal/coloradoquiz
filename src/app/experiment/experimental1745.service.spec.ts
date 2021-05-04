import { TestBed } from '@angular/core/testing';

import { Experimental1745Service } from './experimental1745.service';

describe('Experimental1745Service', () => {
  let service: Experimental1745Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1745Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
