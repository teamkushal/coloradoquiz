import { TestBed } from '@angular/core/testing';

import { Experimental1265Service } from './experimental1265.service';

describe('Experimental1265Service', () => {
  let service: Experimental1265Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1265Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
