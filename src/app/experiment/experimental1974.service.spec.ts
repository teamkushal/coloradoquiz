import { TestBed } from '@angular/core/testing';

import { Experimental1974Service } from './experimental1974.service';

describe('Experimental1974Service', () => {
  let service: Experimental1974Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1974Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
