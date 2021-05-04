import { TestBed } from '@angular/core/testing';

import { Experimental770Service } from './experimental770.service';

describe('Experimental770Service', () => {
  let service: Experimental770Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental770Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
