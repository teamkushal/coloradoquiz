import { TestBed } from '@angular/core/testing';

import { Experimental2524Service } from './experimental2524.service';

describe('Experimental2524Service', () => {
  let service: Experimental2524Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2524Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
