import { TestBed } from '@angular/core/testing';

import { Experimental2486Service } from './experimental2486.service';

describe('Experimental2486Service', () => {
  let service: Experimental2486Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2486Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
