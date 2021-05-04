import { TestBed } from '@angular/core/testing';

import { Experimental2154Service } from './experimental2154.service';

describe('Experimental2154Service', () => {
  let service: Experimental2154Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2154Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
