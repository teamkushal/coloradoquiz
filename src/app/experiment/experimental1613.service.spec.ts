import { TestBed } from '@angular/core/testing';

import { Experimental1613Service } from './experimental1613.service';

describe('Experimental1613Service', () => {
  let service: Experimental1613Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1613Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
