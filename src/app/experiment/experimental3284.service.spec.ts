import { TestBed } from '@angular/core/testing';

import { Experimental3284Service } from './experimental3284.service';

describe('Experimental3284Service', () => {
  let service: Experimental3284Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3284Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
