import { TestBed } from '@angular/core/testing';

import { Experimental3712Service } from './experimental3712.service';

describe('Experimental3712Service', () => {
  let service: Experimental3712Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3712Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
