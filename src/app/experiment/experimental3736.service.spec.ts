import { TestBed } from '@angular/core/testing';

import { Experimental3736Service } from './experimental3736.service';

describe('Experimental3736Service', () => {
  let service: Experimental3736Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3736Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
