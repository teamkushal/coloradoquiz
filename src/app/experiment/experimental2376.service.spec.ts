import { TestBed } from '@angular/core/testing';

import { Experimental2376Service } from './experimental2376.service';

describe('Experimental2376Service', () => {
  let service: Experimental2376Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2376Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
