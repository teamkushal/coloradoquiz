import { TestBed } from '@angular/core/testing';

import { Experimental2205Service } from './experimental2205.service';

describe('Experimental2205Service', () => {
  let service: Experimental2205Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2205Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
