import { TestBed } from '@angular/core/testing';

import { Experimental2865Service } from './experimental2865.service';

describe('Experimental2865Service', () => {
  let service: Experimental2865Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2865Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
