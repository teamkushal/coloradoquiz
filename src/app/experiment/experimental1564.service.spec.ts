import { TestBed } from '@angular/core/testing';

import { Experimental1564Service } from './experimental1564.service';

describe('Experimental1564Service', () => {
  let service: Experimental1564Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1564Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
