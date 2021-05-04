import { TestBed } from '@angular/core/testing';

import { Experimental3289Service } from './experimental3289.service';

describe('Experimental3289Service', () => {
  let service: Experimental3289Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3289Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
