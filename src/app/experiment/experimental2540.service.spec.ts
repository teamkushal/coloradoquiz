import { TestBed } from '@angular/core/testing';

import { Experimental2540Service } from './experimental2540.service';

describe('Experimental2540Service', () => {
  let service: Experimental2540Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2540Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
