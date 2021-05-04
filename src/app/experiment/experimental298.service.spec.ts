import { TestBed } from '@angular/core/testing';

import { Experimental298Service } from './experimental298.service';

describe('Experimental298Service', () => {
  let service: Experimental298Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental298Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
