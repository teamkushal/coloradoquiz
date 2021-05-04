import { TestBed } from '@angular/core/testing';

import { Experimental42Service } from './experimental42.service';

describe('Experimental42Service', () => {
  let service: Experimental42Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental42Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
