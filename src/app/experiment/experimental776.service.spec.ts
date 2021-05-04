import { TestBed } from '@angular/core/testing';

import { Experimental776Service } from './experimental776.service';

describe('Experimental776Service', () => {
  let service: Experimental776Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental776Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
