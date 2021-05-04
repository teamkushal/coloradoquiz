import { TestBed } from '@angular/core/testing';

import { Experimental1956Service } from './experimental1956.service';

describe('Experimental1956Service', () => {
  let service: Experimental1956Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1956Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
