import { TestBed } from '@angular/core/testing';

import { Experimental2897Service } from './experimental2897.service';

describe('Experimental2897Service', () => {
  let service: Experimental2897Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2897Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
