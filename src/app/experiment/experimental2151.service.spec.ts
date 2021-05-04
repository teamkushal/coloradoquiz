import { TestBed } from '@angular/core/testing';

import { Experimental2151Service } from './experimental2151.service';

describe('Experimental2151Service', () => {
  let service: Experimental2151Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2151Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
