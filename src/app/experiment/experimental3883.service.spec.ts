import { TestBed } from '@angular/core/testing';

import { Experimental3883Service } from './experimental3883.service';

describe('Experimental3883Service', () => {
  let service: Experimental3883Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3883Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
