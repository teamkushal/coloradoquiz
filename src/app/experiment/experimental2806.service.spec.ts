import { TestBed } from '@angular/core/testing';

import { Experimental2806Service } from './experimental2806.service';

describe('Experimental2806Service', () => {
  let service: Experimental2806Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2806Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
