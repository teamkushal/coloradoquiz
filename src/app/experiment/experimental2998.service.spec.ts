import { TestBed } from '@angular/core/testing';

import { Experimental2998Service } from './experimental2998.service';

describe('Experimental2998Service', () => {
  let service: Experimental2998Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2998Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
