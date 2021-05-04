import { TestBed } from '@angular/core/testing';

import { Experimental2837Service } from './experimental2837.service';

describe('Experimental2837Service', () => {
  let service: Experimental2837Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2837Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
