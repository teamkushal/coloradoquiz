import { TestBed } from '@angular/core/testing';

import { Experimental1767Service } from './experimental1767.service';

describe('Experimental1767Service', () => {
  let service: Experimental1767Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1767Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
