import { TestBed } from '@angular/core/testing';

import { Experimental2770Service } from './experimental2770.service';

describe('Experimental2770Service', () => {
  let service: Experimental2770Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2770Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
