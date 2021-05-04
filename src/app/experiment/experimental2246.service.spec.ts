import { TestBed } from '@angular/core/testing';

import { Experimental2246Service } from './experimental2246.service';

describe('Experimental2246Service', () => {
  let service: Experimental2246Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2246Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
