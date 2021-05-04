import { TestBed } from '@angular/core/testing';

import { Experimental3086Service } from './experimental3086.service';

describe('Experimental3086Service', () => {
  let service: Experimental3086Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3086Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
