import { TestBed } from '@angular/core/testing';

import { Experimental1752Service } from './experimental1752.service';

describe('Experimental1752Service', () => {
  let service: Experimental1752Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1752Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
