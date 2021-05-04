import { TestBed } from '@angular/core/testing';

import { Experimental2817Service } from './experimental2817.service';

describe('Experimental2817Service', () => {
  let service: Experimental2817Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2817Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
