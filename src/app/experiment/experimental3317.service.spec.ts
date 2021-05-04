import { TestBed } from '@angular/core/testing';

import { Experimental3317Service } from './experimental3317.service';

describe('Experimental3317Service', () => {
  let service: Experimental3317Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3317Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
