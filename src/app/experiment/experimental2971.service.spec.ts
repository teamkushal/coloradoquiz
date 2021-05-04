import { TestBed } from '@angular/core/testing';

import { Experimental2971Service } from './experimental2971.service';

describe('Experimental2971Service', () => {
  let service: Experimental2971Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2971Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
