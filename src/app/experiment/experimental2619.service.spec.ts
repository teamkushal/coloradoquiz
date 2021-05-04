import { TestBed } from '@angular/core/testing';

import { Experimental2619Service } from './experimental2619.service';

describe('Experimental2619Service', () => {
  let service: Experimental2619Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2619Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
