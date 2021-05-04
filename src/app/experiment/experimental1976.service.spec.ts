import { TestBed } from '@angular/core/testing';

import { Experimental1976Service } from './experimental1976.service';

describe('Experimental1976Service', () => {
  let service: Experimental1976Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1976Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
