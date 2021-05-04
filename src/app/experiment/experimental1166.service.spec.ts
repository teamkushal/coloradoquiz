import { TestBed } from '@angular/core/testing';

import { Experimental1166Service } from './experimental1166.service';

describe('Experimental1166Service', () => {
  let service: Experimental1166Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1166Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
