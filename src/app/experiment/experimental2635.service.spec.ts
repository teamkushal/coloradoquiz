import { TestBed } from '@angular/core/testing';

import { Experimental2635Service } from './experimental2635.service';

describe('Experimental2635Service', () => {
  let service: Experimental2635Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2635Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
