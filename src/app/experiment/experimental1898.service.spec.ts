import { TestBed } from '@angular/core/testing';

import { Experimental1898Service } from './experimental1898.service';

describe('Experimental1898Service', () => {
  let service: Experimental1898Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1898Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
