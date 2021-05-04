import { TestBed } from '@angular/core/testing';

import { Experimental1999Service } from './experimental1999.service';

describe('Experimental1999Service', () => {
  let service: Experimental1999Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1999Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
