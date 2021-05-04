import { TestBed } from '@angular/core/testing';

import { Experimental3055Service } from './experimental3055.service';

describe('Experimental3055Service', () => {
  let service: Experimental3055Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3055Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
