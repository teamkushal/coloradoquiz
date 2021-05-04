import { TestBed } from '@angular/core/testing';

import { Experimental3336Service } from './experimental3336.service';

describe('Experimental3336Service', () => {
  let service: Experimental3336Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3336Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
