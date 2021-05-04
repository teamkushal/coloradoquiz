import { TestBed } from '@angular/core/testing';

import { Experimental2796Service } from './experimental2796.service';

describe('Experimental2796Service', () => {
  let service: Experimental2796Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2796Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
