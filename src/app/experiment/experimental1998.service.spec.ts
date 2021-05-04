import { TestBed } from '@angular/core/testing';

import { Experimental1998Service } from './experimental1998.service';

describe('Experimental1998Service', () => {
  let service: Experimental1998Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1998Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
