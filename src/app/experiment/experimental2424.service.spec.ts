import { TestBed } from '@angular/core/testing';

import { Experimental2424Service } from './experimental2424.service';

describe('Experimental2424Service', () => {
  let service: Experimental2424Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2424Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
