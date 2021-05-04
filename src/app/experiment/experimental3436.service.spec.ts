import { TestBed } from '@angular/core/testing';

import { Experimental3436Service } from './experimental3436.service';

describe('Experimental3436Service', () => {
  let service: Experimental3436Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3436Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
