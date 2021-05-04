import { TestBed } from '@angular/core/testing';

import { Experimental2810Service } from './experimental2810.service';

describe('Experimental2810Service', () => {
  let service: Experimental2810Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2810Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
