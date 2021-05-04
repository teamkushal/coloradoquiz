import { TestBed } from '@angular/core/testing';

import { Experimental2808Service } from './experimental2808.service';

describe('Experimental2808Service', () => {
  let service: Experimental2808Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2808Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
