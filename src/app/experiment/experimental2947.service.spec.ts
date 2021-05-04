import { TestBed } from '@angular/core/testing';

import { Experimental2947Service } from './experimental2947.service';

describe('Experimental2947Service', () => {
  let service: Experimental2947Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2947Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
