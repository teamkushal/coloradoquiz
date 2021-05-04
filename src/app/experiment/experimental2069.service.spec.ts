import { TestBed } from '@angular/core/testing';

import { Experimental2069Service } from './experimental2069.service';

describe('Experimental2069Service', () => {
  let service: Experimental2069Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2069Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
