import { TestBed } from '@angular/core/testing';

import { Experimental2681Service } from './experimental2681.service';

describe('Experimental2681Service', () => {
  let service: Experimental2681Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2681Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
