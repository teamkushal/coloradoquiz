import { TestBed } from '@angular/core/testing';

import { Experimental1960Service } from './experimental1960.service';

describe('Experimental1960Service', () => {
  let service: Experimental1960Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1960Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
