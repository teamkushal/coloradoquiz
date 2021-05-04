import { TestBed } from '@angular/core/testing';

import { Experimental916Service } from './experimental916.service';

describe('Experimental916Service', () => {
  let service: Experimental916Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental916Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
