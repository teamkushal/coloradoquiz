import { TestBed } from '@angular/core/testing';

import { Experimental2473Service } from './experimental2473.service';

describe('Experimental2473Service', () => {
  let service: Experimental2473Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2473Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
