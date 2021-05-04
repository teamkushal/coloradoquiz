import { TestBed } from '@angular/core/testing';

import { Experimental2986Service } from './experimental2986.service';

describe('Experimental2986Service', () => {
  let service: Experimental2986Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2986Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
