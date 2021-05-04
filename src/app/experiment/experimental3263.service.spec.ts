import { TestBed } from '@angular/core/testing';

import { Experimental3263Service } from './experimental3263.service';

describe('Experimental3263Service', () => {
  let service: Experimental3263Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3263Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
