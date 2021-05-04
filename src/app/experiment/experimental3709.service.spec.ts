import { TestBed } from '@angular/core/testing';

import { Experimental3709Service } from './experimental3709.service';

describe('Experimental3709Service', () => {
  let service: Experimental3709Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3709Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
