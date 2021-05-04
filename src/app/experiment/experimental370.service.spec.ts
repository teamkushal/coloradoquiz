import { TestBed } from '@angular/core/testing';

import { Experimental370Service } from './experimental370.service';

describe('Experimental370Service', () => {
  let service: Experimental370Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental370Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
