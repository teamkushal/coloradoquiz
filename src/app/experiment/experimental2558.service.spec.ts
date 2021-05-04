import { TestBed } from '@angular/core/testing';

import { Experimental2558Service } from './experimental2558.service';

describe('Experimental2558Service', () => {
  let service: Experimental2558Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2558Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
