import { TestBed } from '@angular/core/testing';

import { Experimental1903Service } from './experimental1903.service';

describe('Experimental1903Service', () => {
  let service: Experimental1903Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1903Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
