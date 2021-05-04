import { TestBed } from '@angular/core/testing';

import { Experimental2103Service } from './experimental2103.service';

describe('Experimental2103Service', () => {
  let service: Experimental2103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
