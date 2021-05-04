import { TestBed } from '@angular/core/testing';

import { Experimental2329Service } from './experimental2329.service';

describe('Experimental2329Service', () => {
  let service: Experimental2329Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2329Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
