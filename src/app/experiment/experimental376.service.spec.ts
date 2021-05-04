import { TestBed } from '@angular/core/testing';

import { Experimental376Service } from './experimental376.service';

describe('Experimental376Service', () => {
  let service: Experimental376Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental376Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
