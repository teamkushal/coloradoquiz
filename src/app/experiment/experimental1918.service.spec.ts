import { TestBed } from '@angular/core/testing';

import { Experimental1918Service } from './experimental1918.service';

describe('Experimental1918Service', () => {
  let service: Experimental1918Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1918Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
