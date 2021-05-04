import { TestBed } from '@angular/core/testing';

import { Experimental3549Service } from './experimental3549.service';

describe('Experimental3549Service', () => {
  let service: Experimental3549Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3549Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
