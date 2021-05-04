import { TestBed } from '@angular/core/testing';

import { Experimental3047Service } from './experimental3047.service';

describe('Experimental3047Service', () => {
  let service: Experimental3047Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3047Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
