import { TestBed } from '@angular/core/testing';

import { Experimental2879Service } from './experimental2879.service';

describe('Experimental2879Service', () => {
  let service: Experimental2879Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2879Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
