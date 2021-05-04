import { TestBed } from '@angular/core/testing';

import { Experimental2959Service } from './experimental2959.service';

describe('Experimental2959Service', () => {
  let service: Experimental2959Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2959Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
