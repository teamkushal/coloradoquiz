import { TestBed } from '@angular/core/testing';

import { Experimental1622Service } from './experimental1622.service';

describe('Experimental1622Service', () => {
  let service: Experimental1622Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1622Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
