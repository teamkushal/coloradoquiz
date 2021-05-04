import { TestBed } from '@angular/core/testing';

import { Experimental1823Service } from './experimental1823.service';

describe('Experimental1823Service', () => {
  let service: Experimental1823Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1823Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
