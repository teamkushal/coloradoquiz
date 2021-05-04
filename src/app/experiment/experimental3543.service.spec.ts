import { TestBed } from '@angular/core/testing';

import { Experimental3543Service } from './experimental3543.service';

describe('Experimental3543Service', () => {
  let service: Experimental3543Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3543Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
