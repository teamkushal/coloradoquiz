import { TestBed } from '@angular/core/testing';

import { Experimental2538Service } from './experimental2538.service';

describe('Experimental2538Service', () => {
  let service: Experimental2538Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2538Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
