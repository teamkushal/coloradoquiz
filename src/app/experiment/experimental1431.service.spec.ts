import { TestBed } from '@angular/core/testing';

import { Experimental1431Service } from './experimental1431.service';

describe('Experimental1431Service', () => {
  let service: Experimental1431Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1431Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
