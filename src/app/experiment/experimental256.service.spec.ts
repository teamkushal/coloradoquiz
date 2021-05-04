import { TestBed } from '@angular/core/testing';

import { Experimental256Service } from './experimental256.service';

describe('Experimental256Service', () => {
  let service: Experimental256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
