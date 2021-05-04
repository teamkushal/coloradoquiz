import { TestBed } from '@angular/core/testing';

import { Experimental2097Service } from './experimental2097.service';

describe('Experimental2097Service', () => {
  let service: Experimental2097Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2097Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
