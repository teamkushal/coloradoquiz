import { TestBed } from '@angular/core/testing';

import { Experimental2694Service } from './experimental2694.service';

describe('Experimental2694Service', () => {
  let service: Experimental2694Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2694Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
