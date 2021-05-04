import { TestBed } from '@angular/core/testing';

import { Experimental2876Service } from './experimental2876.service';

describe('Experimental2876Service', () => {
  let service: Experimental2876Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2876Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
