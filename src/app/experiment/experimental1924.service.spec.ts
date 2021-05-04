import { TestBed } from '@angular/core/testing';

import { Experimental1924Service } from './experimental1924.service';

describe('Experimental1924Service', () => {
  let service: Experimental1924Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1924Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
