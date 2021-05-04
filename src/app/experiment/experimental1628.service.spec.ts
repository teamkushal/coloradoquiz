import { TestBed } from '@angular/core/testing';

import { Experimental1628Service } from './experimental1628.service';

describe('Experimental1628Service', () => {
  let service: Experimental1628Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1628Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
