import { TestBed } from '@angular/core/testing';

import { Experimental538Service } from './experimental538.service';

describe('Experimental538Service', () => {
  let service: Experimental538Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental538Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
