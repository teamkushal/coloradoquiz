import { TestBed } from '@angular/core/testing';

import { Experimental3410Service } from './experimental3410.service';

describe('Experimental3410Service', () => {
  let service: Experimental3410Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3410Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
