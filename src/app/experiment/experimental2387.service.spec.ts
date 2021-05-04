import { TestBed } from '@angular/core/testing';

import { Experimental2387Service } from './experimental2387.service';

describe('Experimental2387Service', () => {
  let service: Experimental2387Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2387Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
