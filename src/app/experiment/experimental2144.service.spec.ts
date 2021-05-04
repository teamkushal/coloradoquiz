import { TestBed } from '@angular/core/testing';

import { Experimental2144Service } from './experimental2144.service';

describe('Experimental2144Service', () => {
  let service: Experimental2144Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2144Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
