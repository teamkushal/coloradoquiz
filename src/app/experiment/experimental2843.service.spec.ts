import { TestBed } from '@angular/core/testing';

import { Experimental2843Service } from './experimental2843.service';

describe('Experimental2843Service', () => {
  let service: Experimental2843Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2843Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
