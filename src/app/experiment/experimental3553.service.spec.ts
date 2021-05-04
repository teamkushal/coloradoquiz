import { TestBed } from '@angular/core/testing';

import { Experimental3553Service } from './experimental3553.service';

describe('Experimental3553Service', () => {
  let service: Experimental3553Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3553Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
