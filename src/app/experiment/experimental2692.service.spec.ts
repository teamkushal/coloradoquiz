import { TestBed } from '@angular/core/testing';

import { Experimental2692Service } from './experimental2692.service';

describe('Experimental2692Service', () => {
  let service: Experimental2692Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2692Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
