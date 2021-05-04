import { TestBed } from '@angular/core/testing';

import { Experimental2748Service } from './experimental2748.service';

describe('Experimental2748Service', () => {
  let service: Experimental2748Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2748Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
