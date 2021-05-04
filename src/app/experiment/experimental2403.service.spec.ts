import { TestBed } from '@angular/core/testing';

import { Experimental2403Service } from './experimental2403.service';

describe('Experimental2403Service', () => {
  let service: Experimental2403Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2403Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
