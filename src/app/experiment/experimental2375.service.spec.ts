import { TestBed } from '@angular/core/testing';

import { Experimental2375Service } from './experimental2375.service';

describe('Experimental2375Service', () => {
  let service: Experimental2375Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2375Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
