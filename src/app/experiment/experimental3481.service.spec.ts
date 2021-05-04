import { TestBed } from '@angular/core/testing';

import { Experimental3481Service } from './experimental3481.service';

describe('Experimental3481Service', () => {
  let service: Experimental3481Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3481Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
