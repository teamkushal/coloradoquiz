import { TestBed } from '@angular/core/testing';

import { Experimental2363Service } from './experimental2363.service';

describe('Experimental2363Service', () => {
  let service: Experimental2363Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2363Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
