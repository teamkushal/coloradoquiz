import { TestBed } from '@angular/core/testing';

import { Experimental2311Service } from './experimental2311.service';

describe('Experimental2311Service', () => {
  let service: Experimental2311Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2311Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
