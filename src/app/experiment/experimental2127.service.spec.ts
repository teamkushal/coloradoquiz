import { TestBed } from '@angular/core/testing';

import { Experimental2127Service } from './experimental2127.service';

describe('Experimental2127Service', () => {
  let service: Experimental2127Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2127Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
