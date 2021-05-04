import { TestBed } from '@angular/core/testing';

import { Experimental3072Service } from './experimental3072.service';

describe('Experimental3072Service', () => {
  let service: Experimental3072Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3072Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
