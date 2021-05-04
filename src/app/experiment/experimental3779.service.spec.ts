import { TestBed } from '@angular/core/testing';

import { Experimental3779Service } from './experimental3779.service';

describe('Experimental3779Service', () => {
  let service: Experimental3779Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3779Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
