import { TestBed } from '@angular/core/testing';

import { Experimental1925Service } from './experimental1925.service';

describe('Experimental1925Service', () => {
  let service: Experimental1925Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1925Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
