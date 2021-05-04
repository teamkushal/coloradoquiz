import { TestBed } from '@angular/core/testing';

import { Experimental2732Service } from './experimental2732.service';

describe('Experimental2732Service', () => {
  let service: Experimental2732Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2732Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
