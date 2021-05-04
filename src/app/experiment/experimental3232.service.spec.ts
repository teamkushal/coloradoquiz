import { TestBed } from '@angular/core/testing';

import { Experimental3232Service } from './experimental3232.service';

describe('Experimental3232Service', () => {
  let service: Experimental3232Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3232Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
