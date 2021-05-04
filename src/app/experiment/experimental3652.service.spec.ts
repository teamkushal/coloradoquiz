import { TestBed } from '@angular/core/testing';

import { Experimental3652Service } from './experimental3652.service';

describe('Experimental3652Service', () => {
  let service: Experimental3652Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3652Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
