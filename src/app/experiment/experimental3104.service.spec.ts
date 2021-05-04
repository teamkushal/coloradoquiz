import { TestBed } from '@angular/core/testing';

import { Experimental3104Service } from './experimental3104.service';

describe('Experimental3104Service', () => {
  let service: Experimental3104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
