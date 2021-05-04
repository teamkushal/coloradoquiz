import { TestBed } from '@angular/core/testing';

import { Experimental3633Service } from './experimental3633.service';

describe('Experimental3633Service', () => {
  let service: Experimental3633Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3633Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
