import { TestBed } from '@angular/core/testing';

import { Experimental3918Service } from './experimental3918.service';

describe('Experimental3918Service', () => {
  let service: Experimental3918Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3918Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
