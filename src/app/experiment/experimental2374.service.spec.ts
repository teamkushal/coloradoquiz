import { TestBed } from '@angular/core/testing';

import { Experimental2374Service } from './experimental2374.service';

describe('Experimental2374Service', () => {
  let service: Experimental2374Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2374Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
