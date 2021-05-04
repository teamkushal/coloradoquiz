import { TestBed } from '@angular/core/testing';

import { Experimental2704Service } from './experimental2704.service';

describe('Experimental2704Service', () => {
  let service: Experimental2704Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2704Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
