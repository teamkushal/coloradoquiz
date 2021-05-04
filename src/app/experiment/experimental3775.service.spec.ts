import { TestBed } from '@angular/core/testing';

import { Experimental3775Service } from './experimental3775.service';

describe('Experimental3775Service', () => {
  let service: Experimental3775Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3775Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
