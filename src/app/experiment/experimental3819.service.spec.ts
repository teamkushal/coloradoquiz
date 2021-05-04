import { TestBed } from '@angular/core/testing';

import { Experimental3819Service } from './experimental3819.service';

describe('Experimental3819Service', () => {
  let service: Experimental3819Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3819Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
