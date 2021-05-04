import { TestBed } from '@angular/core/testing';

import { Experimental1968Service } from './experimental1968.service';

describe('Experimental1968Service', () => {
  let service: Experimental1968Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1968Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
