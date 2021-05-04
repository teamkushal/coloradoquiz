import { TestBed } from '@angular/core/testing';

import { Experimental3837Service } from './experimental3837.service';

describe('Experimental3837Service', () => {
  let service: Experimental3837Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3837Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
