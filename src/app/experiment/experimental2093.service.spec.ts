import { TestBed } from '@angular/core/testing';

import { Experimental2093Service } from './experimental2093.service';

describe('Experimental2093Service', () => {
  let service: Experimental2093Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2093Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
