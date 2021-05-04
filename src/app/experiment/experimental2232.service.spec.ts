import { TestBed } from '@angular/core/testing';

import { Experimental2232Service } from './experimental2232.service';

describe('Experimental2232Service', () => {
  let service: Experimental2232Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2232Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
