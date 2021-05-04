import { TestBed } from '@angular/core/testing';

import { Experimental1538Service } from './experimental1538.service';

describe('Experimental1538Service', () => {
  let service: Experimental1538Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1538Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
