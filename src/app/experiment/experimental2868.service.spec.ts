import { TestBed } from '@angular/core/testing';

import { Experimental2868Service } from './experimental2868.service';

describe('Experimental2868Service', () => {
  let service: Experimental2868Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2868Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
