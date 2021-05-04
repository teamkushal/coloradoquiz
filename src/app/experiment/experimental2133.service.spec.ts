import { TestBed } from '@angular/core/testing';

import { Experimental2133Service } from './experimental2133.service';

describe('Experimental2133Service', () => {
  let service: Experimental2133Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2133Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
