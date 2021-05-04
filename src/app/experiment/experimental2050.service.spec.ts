import { TestBed } from '@angular/core/testing';

import { Experimental2050Service } from './experimental2050.service';

describe('Experimental2050Service', () => {
  let service: Experimental2050Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2050Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
