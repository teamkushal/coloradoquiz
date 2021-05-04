import { TestBed } from '@angular/core/testing';

import { Experimental2974Service } from './experimental2974.service';

describe('Experimental2974Service', () => {
  let service: Experimental2974Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2974Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
