import { TestBed } from '@angular/core/testing';

import { Experimental1910Service } from './experimental1910.service';

describe('Experimental1910Service', () => {
  let service: Experimental1910Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1910Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
