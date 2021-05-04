import { TestBed } from '@angular/core/testing';

import { Experimental3491Service } from './experimental3491.service';

describe('Experimental3491Service', () => {
  let service: Experimental3491Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3491Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
