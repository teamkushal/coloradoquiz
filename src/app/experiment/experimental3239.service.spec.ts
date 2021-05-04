import { TestBed } from '@angular/core/testing';

import { Experimental3239Service } from './experimental3239.service';

describe('Experimental3239Service', () => {
  let service: Experimental3239Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3239Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
