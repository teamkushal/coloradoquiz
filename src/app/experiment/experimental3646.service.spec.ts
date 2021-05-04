import { TestBed } from '@angular/core/testing';

import { Experimental3646Service } from './experimental3646.service';

describe('Experimental3646Service', () => {
  let service: Experimental3646Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3646Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
