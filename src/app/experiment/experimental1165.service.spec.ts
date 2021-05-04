import { TestBed } from '@angular/core/testing';

import { Experimental1165Service } from './experimental1165.service';

describe('Experimental1165Service', () => {
  let service: Experimental1165Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1165Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
