import { TestBed } from '@angular/core/testing';

import { Experimental2362Service } from './experimental2362.service';

describe('Experimental2362Service', () => {
  let service: Experimental2362Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2362Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
