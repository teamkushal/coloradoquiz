import { TestBed } from '@angular/core/testing';

import { Experimental59Service } from './experimental59.service';

describe('Experimental59Service', () => {
  let service: Experimental59Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental59Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
