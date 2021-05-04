import { TestBed } from '@angular/core/testing';

import { Experimental3984Service } from './experimental3984.service';

describe('Experimental3984Service', () => {
  let service: Experimental3984Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3984Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
