import { TestBed } from '@angular/core/testing';

import { Experimental1868Service } from './experimental1868.service';

describe('Experimental1868Service', () => {
  let service: Experimental1868Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1868Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
