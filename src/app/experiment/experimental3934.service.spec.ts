import { TestBed } from '@angular/core/testing';

import { Experimental3934Service } from './experimental3934.service';

describe('Experimental3934Service', () => {
  let service: Experimental3934Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3934Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
