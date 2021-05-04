import { TestBed } from '@angular/core/testing';

import { Experimental3643Service } from './experimental3643.service';

describe('Experimental3643Service', () => {
  let service: Experimental3643Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3643Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
