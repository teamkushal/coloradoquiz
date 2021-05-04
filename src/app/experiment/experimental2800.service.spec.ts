import { TestBed } from '@angular/core/testing';

import { Experimental2800Service } from './experimental2800.service';

describe('Experimental2800Service', () => {
  let service: Experimental2800Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2800Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
