import { TestBed } from '@angular/core/testing';

import { Experimental2371Service } from './experimental2371.service';

describe('Experimental2371Service', () => {
  let service: Experimental2371Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2371Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
