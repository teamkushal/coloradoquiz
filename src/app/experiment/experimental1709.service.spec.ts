import { TestBed } from '@angular/core/testing';

import { Experimental1709Service } from './experimental1709.service';

describe('Experimental1709Service', () => {
  let service: Experimental1709Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1709Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
