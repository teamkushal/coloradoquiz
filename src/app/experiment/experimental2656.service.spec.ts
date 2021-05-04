import { TestBed } from '@angular/core/testing';

import { Experimental2656Service } from './experimental2656.service';

describe('Experimental2656Service', () => {
  let service: Experimental2656Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2656Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
