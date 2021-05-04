import { TestBed } from '@angular/core/testing';

import { Experimental234Service } from './experimental234.service';

describe('Experimental234Service', () => {
  let service: Experimental234Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental234Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
