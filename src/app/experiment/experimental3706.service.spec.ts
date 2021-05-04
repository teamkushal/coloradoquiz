import { TestBed } from '@angular/core/testing';

import { Experimental3706Service } from './experimental3706.service';

describe('Experimental3706Service', () => {
  let service: Experimental3706Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3706Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
