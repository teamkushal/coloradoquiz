import { TestBed } from '@angular/core/testing';

import { Experimental404Service } from './experimental404.service';

describe('Experimental404Service', () => {
  let service: Experimental404Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental404Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
