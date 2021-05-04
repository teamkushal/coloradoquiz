import { TestBed } from '@angular/core/testing';

import { Experimental2072Service } from './experimental2072.service';

describe('Experimental2072Service', () => {
  let service: Experimental2072Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2072Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
