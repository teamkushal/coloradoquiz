import { TestBed } from '@angular/core/testing';

import { Experimental2279Service } from './experimental2279.service';

describe('Experimental2279Service', () => {
  let service: Experimental2279Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2279Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
