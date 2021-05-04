import { TestBed } from '@angular/core/testing';

import { Experimental3396Service } from './experimental3396.service';

describe('Experimental3396Service', () => {
  let service: Experimental3396Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3396Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
