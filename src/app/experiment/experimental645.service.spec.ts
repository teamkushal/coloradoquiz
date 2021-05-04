import { TestBed } from '@angular/core/testing';

import { Experimental645Service } from './experimental645.service';

describe('Experimental645Service', () => {
  let service: Experimental645Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental645Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
