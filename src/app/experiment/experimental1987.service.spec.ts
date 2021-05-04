import { TestBed } from '@angular/core/testing';

import { Experimental1987Service } from './experimental1987.service';

describe('Experimental1987Service', () => {
  let service: Experimental1987Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1987Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
