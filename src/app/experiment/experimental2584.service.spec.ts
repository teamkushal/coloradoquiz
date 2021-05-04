import { TestBed } from '@angular/core/testing';

import { Experimental2584Service } from './experimental2584.service';

describe('Experimental2584Service', () => {
  let service: Experimental2584Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2584Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
