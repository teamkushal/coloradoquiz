import { TestBed } from '@angular/core/testing';

import { Experimental1798Service } from './experimental1798.service';

describe('Experimental1798Service', () => {
  let service: Experimental1798Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1798Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
