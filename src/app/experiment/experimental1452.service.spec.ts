import { TestBed } from '@angular/core/testing';

import { Experimental1452Service } from './experimental1452.service';

describe('Experimental1452Service', () => {
  let service: Experimental1452Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1452Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
