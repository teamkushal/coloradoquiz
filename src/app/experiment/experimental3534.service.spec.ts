import { TestBed } from '@angular/core/testing';

import { Experimental3534Service } from './experimental3534.service';

describe('Experimental3534Service', () => {
  let service: Experimental3534Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3534Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
