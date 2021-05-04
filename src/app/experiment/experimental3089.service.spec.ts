import { TestBed } from '@angular/core/testing';

import { Experimental3089Service } from './experimental3089.service';

describe('Experimental3089Service', () => {
  let service: Experimental3089Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3089Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
