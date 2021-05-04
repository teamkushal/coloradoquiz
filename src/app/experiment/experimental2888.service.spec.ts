import { TestBed } from '@angular/core/testing';

import { Experimental2888Service } from './experimental2888.service';

describe('Experimental2888Service', () => {
  let service: Experimental2888Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2888Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
