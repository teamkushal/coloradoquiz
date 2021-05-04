import { TestBed } from '@angular/core/testing';

import { Experimental3135Service } from './experimental3135.service';

describe('Experimental3135Service', () => {
  let service: Experimental3135Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3135Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
