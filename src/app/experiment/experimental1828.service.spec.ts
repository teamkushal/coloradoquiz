import { TestBed } from '@angular/core/testing';

import { Experimental1828Service } from './experimental1828.service';

describe('Experimental1828Service', () => {
  let service: Experimental1828Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1828Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
