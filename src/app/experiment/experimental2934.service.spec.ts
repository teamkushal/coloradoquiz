import { TestBed } from '@angular/core/testing';

import { Experimental2934Service } from './experimental2934.service';

describe('Experimental2934Service', () => {
  let service: Experimental2934Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2934Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
