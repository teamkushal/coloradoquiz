import { TestBed } from '@angular/core/testing';

import { Experimental643Service } from './experimental643.service';

describe('Experimental643Service', () => {
  let service: Experimental643Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental643Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
