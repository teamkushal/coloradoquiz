import { TestBed } from '@angular/core/testing';

import { Experimental1884Service } from './experimental1884.service';

describe('Experimental1884Service', () => {
  let service: Experimental1884Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1884Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
