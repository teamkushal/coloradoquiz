import { TestBed } from '@angular/core/testing';

import { Experimental3808Service } from './experimental3808.service';

describe('Experimental3808Service', () => {
  let service: Experimental3808Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3808Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
