import { TestBed } from '@angular/core/testing';

import { Experimental2602Service } from './experimental2602.service';

describe('Experimental2602Service', () => {
  let service: Experimental2602Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2602Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
