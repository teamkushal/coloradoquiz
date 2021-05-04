import { TestBed } from '@angular/core/testing';

import { Experimental1094Service } from './experimental1094.service';

describe('Experimental1094Service', () => {
  let service: Experimental1094Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1094Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
