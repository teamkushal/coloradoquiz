import { TestBed } from '@angular/core/testing';

import { Experimental3448Service } from './experimental3448.service';

describe('Experimental3448Service', () => {
  let service: Experimental3448Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3448Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
