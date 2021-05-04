import { TestBed } from '@angular/core/testing';

import { Experimental3393Service } from './experimental3393.service';

describe('Experimental3393Service', () => {
  let service: Experimental3393Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3393Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
