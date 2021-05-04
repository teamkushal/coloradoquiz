import { TestBed } from '@angular/core/testing';

import { Experimental3948Service } from './experimental3948.service';

describe('Experimental3948Service', () => {
  let service: Experimental3948Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3948Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
