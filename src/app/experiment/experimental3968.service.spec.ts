import { TestBed } from '@angular/core/testing';

import { Experimental3968Service } from './experimental3968.service';

describe('Experimental3968Service', () => {
  let service: Experimental3968Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3968Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
