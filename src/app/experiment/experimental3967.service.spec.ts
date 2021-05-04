import { TestBed } from '@angular/core/testing';

import { Experimental3967Service } from './experimental3967.service';

describe('Experimental3967Service', () => {
  let service: Experimental3967Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3967Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
