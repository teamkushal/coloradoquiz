import { TestBed } from '@angular/core/testing';

import { Experimental3608Service } from './experimental3608.service';

describe('Experimental3608Service', () => {
  let service: Experimental3608Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3608Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
