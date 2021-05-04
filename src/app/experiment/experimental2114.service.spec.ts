import { TestBed } from '@angular/core/testing';

import { Experimental2114Service } from './experimental2114.service';

describe('Experimental2114Service', () => {
  let service: Experimental2114Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2114Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
