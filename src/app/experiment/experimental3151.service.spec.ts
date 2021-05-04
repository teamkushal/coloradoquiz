import { TestBed } from '@angular/core/testing';

import { Experimental3151Service } from './experimental3151.service';

describe('Experimental3151Service', () => {
  let service: Experimental3151Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3151Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
