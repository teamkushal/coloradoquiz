import { TestBed } from '@angular/core/testing';

import { Experimental2348Service } from './experimental2348.service';

describe('Experimental2348Service', () => {
  let service: Experimental2348Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2348Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
