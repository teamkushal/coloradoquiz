import { TestBed } from '@angular/core/testing';

import { Experimental74Service } from './experimental74.service';

describe('Experimental74Service', () => {
  let service: Experimental74Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental74Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
