import { TestBed } from '@angular/core/testing';

import { Experimental1932Service } from './experimental1932.service';

describe('Experimental1932Service', () => {
  let service: Experimental1932Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1932Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
