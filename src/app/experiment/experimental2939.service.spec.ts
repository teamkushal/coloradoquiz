import { TestBed } from '@angular/core/testing';

import { Experimental2939Service } from './experimental2939.service';

describe('Experimental2939Service', () => {
  let service: Experimental2939Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2939Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
