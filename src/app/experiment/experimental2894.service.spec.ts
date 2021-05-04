import { TestBed } from '@angular/core/testing';

import { Experimental2894Service } from './experimental2894.service';

describe('Experimental2894Service', () => {
  let service: Experimental2894Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2894Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
