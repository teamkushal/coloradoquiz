import { TestBed } from '@angular/core/testing';

import { Experimental3890Service } from './experimental3890.service';

describe('Experimental3890Service', () => {
  let service: Experimental3890Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3890Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
