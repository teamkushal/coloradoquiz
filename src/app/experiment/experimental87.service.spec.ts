import { TestBed } from '@angular/core/testing';

import { Experimental87Service } from './experimental87.service';

describe('Experimental87Service', () => {
  let service: Experimental87Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental87Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
