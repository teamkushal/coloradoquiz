import { TestBed } from '@angular/core/testing';

import { Experimental2472Service } from './experimental2472.service';

describe('Experimental2472Service', () => {
  let service: Experimental2472Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2472Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
