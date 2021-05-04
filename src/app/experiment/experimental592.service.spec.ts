import { TestBed } from '@angular/core/testing';

import { Experimental592Service } from './experimental592.service';

describe('Experimental592Service', () => {
  let service: Experimental592Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental592Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
