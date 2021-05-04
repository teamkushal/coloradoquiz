import { TestBed } from '@angular/core/testing';

import { Experimental1770Service } from './experimental1770.service';

describe('Experimental1770Service', () => {
  let service: Experimental1770Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1770Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
