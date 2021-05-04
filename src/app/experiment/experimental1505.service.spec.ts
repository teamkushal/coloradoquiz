import { TestBed } from '@angular/core/testing';

import { Experimental1505Service } from './experimental1505.service';

describe('Experimental1505Service', () => {
  let service: Experimental1505Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1505Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
