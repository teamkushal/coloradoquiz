import { TestBed } from '@angular/core/testing';

import { Experimental1927Service } from './experimental1927.service';

describe('Experimental1927Service', () => {
  let service: Experimental1927Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1927Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
