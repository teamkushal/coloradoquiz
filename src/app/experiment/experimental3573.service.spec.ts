import { TestBed } from '@angular/core/testing';

import { Experimental3573Service } from './experimental3573.service';

describe('Experimental3573Service', () => {
  let service: Experimental3573Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3573Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
