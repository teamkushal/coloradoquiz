import { TestBed } from '@angular/core/testing';

import { Experimental2116Service } from './experimental2116.service';

describe('Experimental2116Service', () => {
  let service: Experimental2116Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2116Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
