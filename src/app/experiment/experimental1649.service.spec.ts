import { TestBed } from '@angular/core/testing';

import { Experimental1649Service } from './experimental1649.service';

describe('Experimental1649Service', () => {
  let service: Experimental1649Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1649Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
