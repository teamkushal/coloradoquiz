import { TestBed } from '@angular/core/testing';

import { Experimental2852Service } from './experimental2852.service';

describe('Experimental2852Service', () => {
  let service: Experimental2852Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2852Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
