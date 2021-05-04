import { TestBed } from '@angular/core/testing';

import { Experimental1030Service } from './experimental1030.service';

describe('Experimental1030Service', () => {
  let service: Experimental1030Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1030Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
