import { TestBed } from '@angular/core/testing';

import { Experimental1621Service } from './experimental1621.service';

describe('Experimental1621Service', () => {
  let service: Experimental1621Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1621Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
