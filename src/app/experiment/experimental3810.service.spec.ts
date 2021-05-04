import { TestBed } from '@angular/core/testing';

import { Experimental3810Service } from './experimental3810.service';

describe('Experimental3810Service', () => {
  let service: Experimental3810Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3810Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
