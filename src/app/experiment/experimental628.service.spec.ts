import { TestBed } from '@angular/core/testing';

import { Experimental628Service } from './experimental628.service';

describe('Experimental628Service', () => {
  let service: Experimental628Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental628Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
