import { TestBed } from '@angular/core/testing';

import { Experimental1294Service } from './experimental1294.service';

describe('Experimental1294Service', () => {
  let service: Experimental1294Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1294Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
