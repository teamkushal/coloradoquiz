import { TestBed } from '@angular/core/testing';

import { Experimental2836Service } from './experimental2836.service';

describe('Experimental2836Service', () => {
  let service: Experimental2836Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2836Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
