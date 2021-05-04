import { TestBed } from '@angular/core/testing';

import { Experimental1615Service } from './experimental1615.service';

describe('Experimental1615Service', () => {
  let service: Experimental1615Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1615Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
