import { TestBed } from '@angular/core/testing';

import { Experimental1964Service } from './experimental1964.service';

describe('Experimental1964Service', () => {
  let service: Experimental1964Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1964Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
